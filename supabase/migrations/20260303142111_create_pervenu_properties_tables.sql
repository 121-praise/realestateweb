/*
  # Pervenu Properties Database Schema

  ## Overview
  Creates the core database tables for the Pervenu Properties website including
  properties, projects, testimonials, and contact submissions.

  ## New Tables
  
  ### 1. properties
  Stores property listings for sale and lease
  - `id` (uuid, primary key)
  - `name` (text) - Property name/title
  - `description` (text) - Full property description
  - `property_type` (text) - Residential/Commercial
  - `listing_type` (text) - Sale/Lease
  - `location` (text) - Property location/area
  - `price` (numeric) - Property price
  - `bedrooms` (integer) - Number of bedrooms
  - `bathrooms` (integer) - Number of bathrooms
  - `square_feet` (integer) - Property size
  - `image_url` (text) - Main property image
  - `images` (jsonb) - Additional property images array
  - `features` (jsonb) - Property features array
  - `status` (text) - Available/Sold/Leased
  - `created_at` (timestamptz) - Creation timestamp

  ### 2. projects
  Showcases completed and ongoing projects
  - `id` (uuid, primary key)
  - `name` (text) - Project name
  - `description` (text) - Project description
  - `category` (text) - Residential/Commercial/Architectural/Engineering
  - `location` (text) - Project location
  - `status` (text) - Completed/Ongoing/Planned
  - `image_url` (text) - Main project image
  - `images` (jsonb) - Additional project images
  - `completion_date` (date) - Project completion date
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. testimonials
  Stores client testimonials and reviews
  - `id` (uuid, primary key)
  - `client_name` (text) - Client name
  - `client_role` (text) - Client role/position
  - `testimonial` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `image_url` (text) - Client photo
  - `created_at` (timestamptz) - Creation timestamp
  - `is_featured` (boolean) - Featured on homepage

  ### 4. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key)
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `phone` (text) - Sender phone
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for properties, projects, and testimonials
  - Authenticated insert access for contact submissions
*/

-- Properties Table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  property_type text NOT NULL DEFAULT 'Residential',
  listing_type text NOT NULL DEFAULT 'Sale',
  location text NOT NULL,
  price numeric NOT NULL,
  bedrooms integer DEFAULT 0,
  bathrooms integer DEFAULT 0,
  square_feet integer,
  image_url text,
  images jsonb DEFAULT '[]'::jsonb,
  features jsonb DEFAULT '[]'::jsonb,
  status text DEFAULT 'Available',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available properties"
  ON properties FOR SELECT
  USING (true);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  status text DEFAULT 'Completed',
  image_url text,
  images jsonb DEFAULT '[]'::jsonb,
  completion_date date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text NOT NULL,
  testimonial text NOT NULL,
  rating integer DEFAULT 5,
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);