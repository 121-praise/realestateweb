import { useState } from 'react';
import { X, Play } from 'lucide-react';

const images = [
  { id: '1', src: '/3.jpg', alt: 'Property 1', type: 'image' },
  { id: '2', src: '/43.jpeg', alt: 'Property 2', type: 'image' },
  { id: '3', src: '/61.jpeg', alt: 'Property 3', type: 'image' },
  { id: '4', src: '/52.jpeg', alt: 'Property 4', type: 'image' },
  { id: '5', src: '/50.jpeg', alt: 'Property 5', type: 'image' },
  { id: '6', src: '/24.jpeg', alt: 'Property 6', type: 'image' },
  { id: '7', src: '/25.jpeg', alt: 'Property 7', type: 'image' },
  { id: '8', src: '/27.jpeg', alt: 'Property 8', type: 'image' },
  { id: '9', src: '/28.jpeg', alt: 'Property 9', type: 'image' },
  { id: '10', src: '/29.jpeg', alt: 'Property 10', type: 'image' },
  { id: '11', src: '/31.jpeg', alt: 'Property 11', type: 'image' },
  { id: '12', src: '/32.jpeg', alt: 'Property 12', type: 'image' },
  { id: '13', src: '/36.jpeg', alt: 'Property 13', type: 'image' },
  { id: '14', src: '/37.jpeg', alt: 'Property 14', type: 'image' },
  { id: '15', src: '/38.jpeg', alt: 'Property 15', type: 'image' },
  { id: '16', src: '/39.jpeg', alt: 'Property 16', type: 'image' },
  { id: '17', src: '/41.jpeg', alt: 'Property 17', type: 'image' },
  { id: '18', src: '/45.jpeg', alt: 'Property 18', type: 'image' },
  { id: '19', src: '/4.jpg', alt: 'Property 19', type: 'image' },
  { id: '20', src: '/23.jpeg', alt: 'Property 20', type: 'image' },
  { id: '21', src: '/44.jpeg', alt: 'Property 21', type: 'image' },
  //{ id: '22', src: '/46.jpeg', alt: 'Property 22', type: 'image' },
  { id: '23', src: '/47.jpeg', alt: 'Property 23', type: 'image' },
  { id: '24', src: '/48.jpeg', alt: 'Property 24', type: 'image' },
  { id: '25', src: '/49.jpeg', alt: 'Property 25', type: 'image' },
  { id: '26', src: '/1.jpg', alt: 'Property 26', type: 'image' },
  { id: '27', src: '/30.jpeg', alt: 'Property 27', type: 'image' },
  { id: '28', src: '/26.jpeg', alt: 'Property 28', type: 'image' },
  { id: '29', src: '/21.jpeg', alt: 'Property 29', type: 'image' },
  { id: '30', src: '/22.jpeg', alt: 'Property 30', type: 'image' },
  { id: '31', src: '/2.jpg', alt: 'Property 31', type: 'image' },
  { id: '32', src: '/42.jpeg', alt: 'Property 32', type: 'image' },
  { id: '33', src: '/53.jpeg', alt: 'Property 33', type: 'image' },
  { id: '34', src: '/54.jpeg', alt: 'Property 34', type: 'image' },
  { id: '35', src: '/55.jpeg', alt: 'Property 35', type: 'image' },
  { id: '36', src: '/56.jpeg', alt: 'Property 36', type: 'image' },
  { id: '37', src: '/57.jpeg', alt: 'Property 37', type: 'image' },
  { id: '38', src: '/58.jpeg', alt: 'Property 38', type: 'image' },
  { id: '39', src: '/59.jpeg', alt: 'Property 39', type: 'image' },
  { id: '40', src: '/60.jpeg', alt: 'Property 40', type: 'image' },
  { id: '41', src: '/61.jpeg', alt: 'Property 41', type: 'image' },
  //{ id: '42', src: '/62.jpeg', alt: 'Property 42', type: 'image' },
  { id: '43', src: '/63.jpeg', alt: 'Property 43', type: 'image' },
  { id: '44', src: '/64.jpeg', alt: 'Property 44', type: 'image' },
  { id: '45', src: '/65.jpeg', alt: 'Property 45', type: 'image' },
 // { id: '46', src: '/66.jpeg', alt: 'Property 46', type: 'image' },
  { id: '47', src: '/67.jpeg', alt: 'Property 47', type: 'image' },
  { id: '48', src: '/68.jpeg', alt: 'Property 48', type: 'image' },
  { id: '49', src: '/69.jpeg', alt: 'Property 49', type: 'image' },
 // { id: '50', src: '/70.jpeg', alt: 'Property 50', type: 'image' },
  { id: '51', src: '/71.jpeg', alt: 'Property 51', type: 'image' },
  { id: '52', src: '/72.jpeg', alt: 'Property 52', type: 'image' },
  { id: '53', src: '/73.jpeg', alt: 'Property 53', type: 'image' },
  { id: '54', src: '/74.jpeg', alt: 'Property 54', type: 'image' },
  { id: '55', src: '/75.jpeg', alt: 'Property 55', type: 'image' },
  //{ id: '56', src: '/76.jpeg', alt: 'Property 56', type: 'image' },
  { id: '57', src: '/77.jpeg', alt: 'Property 57', type: 'image' },
  //{ id: '58', src: '/78.jpeg', alt: 'Property 58', type: 'image' },
  { id: '59', src: '/79.jpeg', alt: 'Property 59', type: 'image' },
  { id: '60', src: '/80.jpeg', alt: 'Property 60', type: 'image' },
 // { id: '61', src: '/81.jpg', alt: 'Property 61', type: 'image' },
  { id: '62', src: '/82.jpeg', alt: 'Property 62', type: 'image' },
  { id: '63', src: '/83.jpeg', alt: 'Property 63', type: 'image' },
  { id: '64', src: '/84.jpeg', alt: 'Property 64', type: 'image' },
  { id: '65', src: '/85.jpeg', alt: 'Property 65', type: 'image' },
  { id: '66', src: '/86.jpeg', alt: 'Property 66', type: 'image' },
  { id: '67', src: '/87.jpeg', alt: 'Property 67', type: 'image' },
  { id: '68', src: '/88.jpeg', alt: 'Property 68', type: 'image' },
  { id: '69', src: '/89.jpeg', alt: 'Property 69', type: 'image' },
  { id: '70', src: '/90.jpeg', alt: 'Property 70', type: 'image' },
  { id: '71', src: '/91.jpeg', alt: 'Property 71', type: 'image' },
  { id: '72', src: '/92.jpeg', alt: 'Property 72', type: 'image' },
  { id: '73', src: '/93.jpeg', alt: 'Property 73', type: 'image' },
  { id: '74', src: '/94.jpeg', alt: 'Property 74', type: 'image' },
  { id: '75', src: '/95.jpeg', alt: 'Property 75', type: 'image' },
  { id: '76', src: '/96.jpeg', alt: 'Property 76', type: 'image' },
  { id: '77', src: '/97.jpeg', alt: 'Property 77', type: 'image' },
  { id: '78', src: '/98.jpeg', alt: 'Property 78', type: 'image' },
  { id: '79', src: '/99.jpeg', alt: 'Property 79', type: 'image' },
  { id: '80', src: '/100.jpeg', alt: 'Property 80', type: 'image' },
  { id: '81', src: '/101.jpeg', alt: 'Property 81', type: 'image' },
  { id: '82', src: '/102.jpeg', alt: 'Property 82', type: 'image' },
  { id: '83', src: '/103.jpeg', alt: 'Property 83', type: 'image' },
  //{ id: '84', src: '/104.jpeg', alt: 'Property 84', type: 'image' },
{ id: '85', src: '/105.jpeg', alt: 'Property 85', type: 'image' },
{ id: '86', src: '/106.jpeg', alt: 'Property 86', type: 'image' },
{ id: '87', src: '/107.jpeg', alt: 'Property 87', type: 'image' },
{id: '88', src: '/108.jpeg', alt: 'Property 88', type: 'image' },
{id: '89', src: '/109.jpeg', alt: 'Property 89', type: 'image' },
{id: '90', src: '/110.jpeg', alt: 'Property 90', type: 'image' },
{id: '91', src: '/111.jpeg', alt: 'Property 91', type: 'image' },
{id: '92', src: '/112.jpeg', alt: 'Property 92', type: 'image' },
{id: '93', src: '/113.jpeg', alt: 'Property 93', type: 'image' },
{id: '94', src: '/114.jpeg', alt: 'Property 94', type: 'image' },
{id: '95', src: '/115.jpeg', alt: 'Property 95', type: 'image' },
{id: '96', src: '/116.jpeg', alt: 'Property 96', type: 'image' },
{id: '97', src: '/117.jpeg', alt: 'Property 97', type: 'image' },
{id: '98', src: '/118.jpeg', alt: 'Property 98', type: 'image' },
{id: '99', src: '/119.jpeg', alt: 'Property 99', type: 'image' },
{id: '100', src: '/120.jpeg', alt: 'Property 100', type: 'image' },
{id: '101', src: '/121.jpeg', alt: 'Property 101', type: 'image' },
{id: '102', src: '/122.jpeg', alt: 'Property 102', type: 'image' },
{id: '103', src: '/123.jpeg', alt: 'Property 103', type: 'image' },
{id: '104', src: '/124.jpeg', alt: 'Property 104', type: 'image' }
  //{ id: '104', src: '/v1.mp4', alt: 'Property Video 1', type: 'video', thumbnail: '/v1image.jpeg' }
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