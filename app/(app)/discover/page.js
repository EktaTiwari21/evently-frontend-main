// File: app/(app)/discover/page.js
import EventCard from '../../../components/EventCard'; // Go up three levels to find components

// Mock data to simulate fetching events from the backend
const mockEvents = [
  { id: 1, title: 'Live Music Festival', description: 'Experience the best live music', date: 'Oct 28, 2024', imageUrl: 'https://placehold.co/352x192/1A1A1A/FFFFFF?text=Music' },
  { id: 2, title: 'Contemporary Art Showcase', description: 'Explore modern art', date: 'Nov 12, 2024', imageUrl: 'https://placehold.co/352x192/1A1A1A/FFFFFF?text=Art' },
  { id: 3, title: 'Tech Innovators Summit', description: 'Discover the latest tech trends', date: 'Nov 20, 2024', imageUrl: 'https://placehold.co/352x192/1A1A1A/FFFFFF?text=Tech' },
];

export default function DiscoverPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 md:py-32">
        <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold leading-tight">
          Discover Your Next<br />Experience
        </h1>
        <div className="mt-8 mx-auto max-w-2xl relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="search"
            placeholder="Search for events by name, location, or organizer..."
            className="w-full h-16 bg-dark-2/50 rounded-full pl-16 pr-6 text-lg text-white placeholder:text-gray-500 ring-1 ring-white/15 backdrop-blur-md focus:ring-white focus:outline-none"
          />
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-stylish text-5xl text-center text-white mb-12">
            Future Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}