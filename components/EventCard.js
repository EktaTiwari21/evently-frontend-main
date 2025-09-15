// File: components/EventCard.js
import Link from 'next/link';

export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.id}`} className="group block overflow-hidden rounded-2xl">
      <div className="relative">
        <img
          src={event.imageUrl || 'https://placehold.co/352x192/000000/FFFFFF?text=Event'}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-dark-2/50 ring-1 ring-white/15 backdrop-blur-md">
        <h3 className="text-lg font-bold text-white font-space-grotesk truncate">{event.title}</h3>
        <p className="mt-1 text-sm text-gray-300 font-space-grotesk truncate">{event.description}</p>
        <p className="mt-2 text-xs text-gray-400 font-space-grotesk">{event.date}</p>
      </div>
    </Link>
  );
}