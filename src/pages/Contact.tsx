import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200">We're Here to Help</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our properties or services? Our team is ready to assist you. Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">Address Km 22, Princess And Angel Mall, Lekki-epe </p>
                    <p className="text-gray-600">Expressway, Lekki, Ajah, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">+234 (0) 803 455 5517</p>
                    <p className="text-gray-600">+234 (0) 807 753 9662</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600">pervenuhomesandproperties@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-900 hover:bg-amber-600 text-white p-3 rounded-full transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-gray-900 hover:bg-amber-600 text-white p-3 rounded-full transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-gray-900 hover:bg-amber-600 text-white p-3 rounded-full transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-gray-900 hover:bg-amber-600 text-white p-3 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-amber-500 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Thank you for contacting us! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    Sorry, there was an error submitting your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-gray-700 disabled:bg-gray-400 text-amber-600 py-4 rounded-md font-semibold text-lg transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3706860835!2d3.600468708650532!3d6.474643793490117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf98b7dddd597%3A0xeb05ff7f9b896c91!2sPrincess%20%26%20Angel%20Mall!5e0!3m2!1sen!2sng!4v1772703789399!5m2!1sen!2sng"
                    className="w-full h-96 rounded-lg border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation at our Lekki office. Our team is ready to discuss your real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348034555517"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Call Now
              </a>
              <a
                href="pervenuhomesandproperties@gmail.com"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
