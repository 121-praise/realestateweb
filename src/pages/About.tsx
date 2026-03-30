import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(23.jpeg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-2xl md:text-3xl font-semibold text-amber-400">We Build</p>
          <p className="text-2xl md:text-3xl font-semibold text-amber-400">We Renovate</p>
          <p className="text-2xl md:text-3xl font-semibold text-amber-400">We Furnish</p>
          <p className="mt-3 text-lg md:text-xl text-white tracking-widest uppercase border-t border-amber-400 pt-3">
      Your Complete Home Solution
    </p>
  </div>
</div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver exceptional real estate solutions that enhance lives and communities through innovation, quality craftsmanship, and unwavering commitment to excellence. We strive to be the most trusted real estate partner for our clients, creating value that endures for generations.
              </p>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading real estate company in Africa and beyond, recognized for transforming skylines and communities through innovative developments, sustainable practices, and unparalleled service excellence. We envision a future where every project sets new standards in quality and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                PERVENU HOMES & PROPERTIES NIGERIAN LIMITED, is an integrated consortium of qualified professionals with efficiency and dynamic approach to undertake Real Estate Development, Property Management, Planning, Architectural Design, Surveying, Project Engineering, Procurement and Contracting Services for Companies, Government, Institutions, Individual in Nigeria and beyond with satisfaction guaranteed. The company has an initial paid up capital of #130 Million shares.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We are formally incorporated as Limited Liability Company under the companies and allied matters act 1990 with registration number RC: 1898936. Though the company is relatively young, the experience of its Board of Directors and Associates Partners, Management and Technical Staff earned over the years in other companies in the Real Estate and Construction Industry in Nigeria is a major asset of the company.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our Scope of Work among other includes the Design and Execution of Housing Estate Project Development on Turn Key basis. We are committed to high quality work of computerizing prices.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We are fully computerized and equipped with modern day machinery and tools. Our team includes high qualified tested and experienced professionals and technicians in various fields of Real Estate.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Pervenu Homes & Properties Nigerian Limited is a leading diversified real estate company operating across Nigeria and international markets. We specialize in creating exceptional living and working spaces through comprehensive real estate solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our integrated approach combines real estate development, architecture, engineering, and property services to deliver projects that exceed expectations. With a commitment to innovation, quality, and client satisfaction, we've established ourselves as a trusted name in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(45.jpeg)' }} />
              <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(27.jpeg)' }} />
              <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(36.jpeg)' }} />
              <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(37.jpeg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Chief Executive Officer</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our CEO Chief Engineer Kenny Uzor Ubah. His achievement in Real Estate Development sector can not be exhausted, with over ten (10) years in Real Estate Development Practice.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                He has brought over two decades of experience in real estate development and commercial property management. With a visionary approach to urban development and a deep understanding of market dynamics, he has successfully led Pervenu Homes & Properties Nigerian Limited through exponential growth and expansion.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Under his strategic leadership, the company has evolved from a regional player to a nationally recognized brand, with projects spanning residential, commercial, and mixed-use developments across major Nigerian cities and internationally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                His commitment to sustainable building practices and innovative design has earned numerous industry awards and recognition from international bodies. He is passionate about creating spaces that not only meet but exceed client expectations and contribute positively to communities.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-4">
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: "url('/ceo.jpg')" }}
              />
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-xl bg-gray-100"
                style={{ backgroundImage: "url('/51.jpeg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We pursue the highest standards in every project, never settling for anything less than exceptional quality.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-amber-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">Honesty and transparency in all our dealings build lasting relationships with clients and partners.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-amber-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and creative solutions to stay ahead in a dynamic industry.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Focus</h3>
              <p className="text-gray-600">Our clients' success and satisfaction drive every decision we make and action we take.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Pervenu Homes & Properties?</h2>
            <p className="text-xl text-gray-300">What sets us apart in the real estate industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Services</h3>
              <p className="text-gray-300">From development to design, we offer end-to-end solutions under one roof, ensuring seamless project execution.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-gray-300">With hundreds of successful projects and thousands of satisfied clients, our results speak for themselves.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-300">Our team of experienced professionals brings decades of combined expertise in real estate, architecture, and engineering.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Prime Locations</h3>
              <p className="text-gray-300">We specialize in identifying and developing properties in the most desirable and strategic locations.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-300">Rigorous quality control processes ensure that every project meets our exacting standards and client expectations.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Client Support</h3>
              <p className="text-gray-300">Dedicated support throughout your journey, from initial consultation to post-purchase assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}