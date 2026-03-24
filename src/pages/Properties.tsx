import { useState } from 'react';
import { X, Play } from 'lucide-react';

const images = [
  { id: '1', src: '/31.jpeg', alt: 'Property 1', type: 'image' },
  { id: '2', src: '/23.jpeg', alt: 'Property 2', type: 'image' },
  { id: '3', src: '/30.jpeg', alt: 'Property 3', type: 'image' },
  { id: '4', src: '/42.jpeg', alt: 'Property 4', type: 'image' },
  { id: '5', src: '/50.jpeg', alt: 'Property 5', type: 'image' },
  { id: '6', src: '/24.jpeg', alt: 'Property 6', type: 'image' },
  { id: '7', src: '/25.jpeg', alt: 'Property 7', type: 'image' },
  { id: '8', src: '/27.jpeg', alt: 'Property 8', type: 'image' },
  { id: '9', src: '/28.jpeg', alt: 'Property 9', type: 'image' },
  { id: '10', src: '/29.jpeg', alt: 'Property 10', type: 'image' },
  { id: '11', src: '/3.jpg', alt: 'Property 11', type: 'image' },
  { id: '12', src: '/32.jpeg', alt: 'Property 12', type: 'image' },
  { id: '13', src: '/36.jpeg', alt: 'Property 13', type: 'image' },
  { id: '14', src: '/37.jpeg', alt: 'Property 14', type: 'image' },
  { id: '15', src: '/38.jpeg', alt: 'Property 15', type: 'image' },
  { id: '16', src: '/39.jpeg', alt: 'Property 16', type: 'image' },
  { id: '17', src: '/41.jpeg', alt: 'Property 17', type: 'image' },
  { id: '18', src: '/45.jpeg', alt: 'Property 18', type: 'image' },
  { id: '19', src: '/4.jpg', alt: 'Property 19', type: 'image' },
  { id: '20', src: '/43.jpeg', alt: 'Property 20', type: 'image' },
  { id: '21', src: '/44.jpeg', alt: 'Property 21', type: 'image' },
  { id: '22', src: '/46.jpeg', alt: 'Property 22', type: 'image' },
  { id: '23', src: '/47.jpeg', alt: 'Property 23', type: 'image' },
  { id: '24', src: '/48.jpeg', alt: 'Property 24', type: 'image' },
  { id: '25', src: '/49.jpeg', alt: 'Property 25', type: 'image' },
  { id: '26', src: '/1.jpg', alt: 'Property 26', type: 'image' },
  { id: '27', src: '/30.jpeg', alt: 'Property 27', type: 'image' },
  { id: '28', src: '/26.jpeg', alt: 'Property 28', type: 'image' },
  { id: '29', src: '/21.jpeg', alt: 'Property 29', type: 'image' },
  { id: '30', src: '/22.jpeg', alt: 'Property 30', type: 'image' },
  { id: '31', src: '/2.jpg', alt: 'Property 31', type: 'image' },
  { id: '32', src: '/v1.mp4', alt: 'Property Video 1', type: 'video', thumbnail: '/v1image.jpeg' }
];

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  type: string;
  thumbnail?: string;
}

export default function Properties() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <div>
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Properties</h1>
            <p className="text-xl md:text-2xl text-gray-200">Discover Your Dream Property</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Property Gallery</h2>
            <p className="text-gray-600">Click any image or video to view full screen</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.src}
                      className="w-full object-cover hover:scale-105 transition-transform duration-500"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-4">
                        <Play className="text-amber-600" size={28} fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            <X size={20} />
          </button>

          {selectedMedia.type === 'video' ? (
            <video
              src={selectedMedia.src}
              className="max-w-full max-h-[90vh] rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Looking for Something Specific?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can help you find the perfect property that meets all your requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}