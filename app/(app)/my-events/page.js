// File: app/(app)/my-events/page.js
import Link from 'next/link';

// Mock data for the organizer's events
const organizerEvents = [
  { id: 1, name: 'Tech Conference (2024)', status: 'Published', ticketsSold: 3500, revenue: '₹57,200' },
  { id: 2, name: 'Carnival (2025)', status: 'Draft', ticketsSold: 0, revenue: '₹0' },
  { id: 3, name: 'Music Fest (2024)', status: 'Ended', ticketsSold: 8000, revenue: '₹8,88,000' },
];

const StatusBadge = ({ status }) => {
  const styles = { Published: 'text-[#CDFFDF]', Draft: 'text-[#966A19]', Ended: 'text-[#CCF6FF]' };
  return <span className={`font-medium text-lg ${styles[status]}`}>{status}</span>;
};

// --- UPDATED ActionButtons with SVG icons ---
const ActionButtons = () => (
    <div className="flex items-center gap-4">
        <button title="Edit Event" className="text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
        </button>
        <button title="Delete Event" className="text-gray-400 hover:text-red-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </button>
    </div>
);

export default function MyEventsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-12">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-itim font-bold leading-6 text-white">Event Details:</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link href="/my-events/create" className="flex items-center gap-2 rounded-lg bg-gray-200 px-5 py-2 text-center text-base font-itim font-medium text-gray-800 shadow-sm hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            Create New Event
          </Link>
        </div>
      </div>

      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-[#A3ACBB]">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-black sm:pl-6">Event Name</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-lg font-medium text-black">Status</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-lg font-medium text-black">Tickets Sold</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-lg font-medium text-black">Revenue</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-lg font-medium text-black">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-black">
                {organizerEvents.map((event) => (
                  <tr key={event.id} className="border-b border-gray-800">
                    <td className="whitespace-nowrap py-6 pl-4 pr-3 text-base font-medium text-white sm:pl-6">{event.name}</td>
                    <td className="whitespace-nowrap px-3 py-6 text-lg"><StatusBadge status={event.status} /></td>
                    <td className="whitespace-nowrap px-3 py-6 text-base text-white">{event.ticketsSold}</td>
                    <td className="whitespace-nowrap px-3 py-6 text-base text-white">{event.revenue}</td>
                    <td className="whitespace-nowrap px-3 py-6 text-base text-white"><ActionButtons /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}