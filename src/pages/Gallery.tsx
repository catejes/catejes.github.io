import Masonry from 'react-responsive-masonry';

const posters = [
  {
    id: 1,
    title: 'WNUR Interest Poster',
    image: 'https://i.imgur.com/H1wmnMM.jpeg',
    height: 'tall',
  },
  {
    id: 2,
    title: 'Phoneathon 2026 Merch',
    image: 'https://i.imgur.com/vw1ziLS.png',
    height: 'short',
  },
  
  {
    id: 3,
    title: 'Radio Set Poster ',
    image: 'https://i.imgur.com/X57JSPz.png',
    height: 'short',
  },
  {
    id: 13,
    title: 'Design For Phoneathon 2025',
    image: 'https://i.imgur.com/RsYsBtJ.png',
    height: 'tall',
  },
  
  
  {
    id: 6,
    title: 'Vinyl Side B',
    image: 'https://i.imgur.com/13LIn5w.jpeg',
    height: 'short',
  },
  {
    id: 7,
    title: 'Event Flyer',
    image: 'https://i.imgur.com/LDpP5Vn.jpeg',
    height: 'tall',
  },
  {
    id: 8,
    title: 'Creative Arts Festival Cover',
    image: 'https://i.imgur.com/rq6qiFX.png',
    height: 'medium',
  },
  {
    id: 9,
    title: 'Phoneathon Merch 2025',
    image: 'https://i.imgur.com/nXHi0cm.png',
    height: 'short',
  },
  {
    id: 10,
    title: 'Radio Schedule',
    image: 'https://i.imgur.com/JEIFbyy.png',
    height: 'medium',
  },

  {
    id: 11,
    title: 'Compost Flyer',
    image: 'https://i.imgur.com/PTXp4vD.png',
    height: 'medium',
  },
  {
    id: 12,
    title: 'Phoneathon 25 Poster',
    image: 'https://i.imgur.com/Nmp83nN.png',
    height: 'tall',
  },
  
  {
    id: 14,
    title: 'Halloween Show Graphic',
    image: 'https://i.imgur.com/ao6Wt5E.png',
    height: 'medium',
  },
  {
    id: 4,
    title: 'Sustainable Movie Night Poster',
    image: 'https://i.imgur.com/7DYoplH.png',
    height: 'tall',
  },
  {
    id: 15,
    title: 'Transference Poster',
    image: 'https://i.imgur.com/KHOFYUY.png',
    height: 'short',
  },
  {
    id: 16,
    title: 'Design for Phoneathon 2026',
    image: 'https://i.imgur.com/wa9XrHP.png',
    height: 'tall',
  },
  {
    id: 17,
    title: 'Phoneathon Merch 2024',
    image: 'https://i.imgur.com/sfipvlp.png',
    height: 'medium',
  },
  {
    id: 18,
    title: 'Radio Show Poster',
    image: 'https://i.imgur.com/uG5BKPg.png',
    height: 'short',
  },
  {
    id: 5,
    title: 'Vinyl Side A',
    image: 'https://i.imgur.com/sa2Br8S.jpeg',
    height: 'medium',
  },
];


export function Gallery() {
  return (
    <section className="min-h-screen py-24 px-6 bg-white-50 pt-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="stix-two-text-one text-center mb-4" style={{ fontSize: '3.5rem', fontWeight: 400 }}>Poster Gallery</h2>
        <p className="mozilla-text-one text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A collection of past posters, artwork, and fun graphics I've worked on.
        </p>
        
        <Masonry columnsCount={3} gutter="20px">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="group relative overflow-hidden rounded-sm hover:shadow-xl transition-shadow cursor-pointer bg-white"
            >
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white">{poster.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}