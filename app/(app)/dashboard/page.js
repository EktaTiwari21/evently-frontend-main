// File: app/(app)/dashboard/page.js
import Link from 'next/link';

// A reusable component for the dashboard stat cards.
const StatCard = ({ title, value, colorClass }) => (
  <div className="flex-1 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 backdrop-blur-sm min-w-[280px]">
    <p className={`font-jaldi text-3xl ${colorClass || 'text-blue-400'}`}>{title}</p>
    <p className="mt-2 font-itim text-4xl font-bold text-white">{value}</p>
  </div>
);

export default function OrganizerDashboardPage() {
  return (
    <div className="bg-black text-white p-4 sm:p-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4 mb-20">
        <h1 className="font-inknut-antiqua text-4xl sm:text-5xl font-bold">Welcome, Jayesh Thakkar!</h1>
        <p className="font-inria-serif text-xl sm:text-2xl text-gray-300">Ready to revolutionize your events?</p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 mb-20">
        <StatCard title="Total Tickets Sold" value="12,348" />
        <StatCard title="Active Events" value="8" />
        <StatCard title="Total Revenue" value="₹30,180" />
      </div>

      {/* Recent Activities Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="font-inria-sans text-3xl text-white mb-8">Recent Activities</h2>
        <ul className="space-y-4">
          <li className="text-lg text-gray-300 border-b border-gray-700 pb-2">New event created: Marketing Summit 2024</li>
          <li className="text-lg text-gray-300 border-b border-gray-700 pb-2">Ticket purchased by Ethan Harper on Tech Conference 2024</li>
          <li className="text-lg text-gray-300">Ticket purchased by Enna on Tech Conference 2025</li>
        </ul>
      </div>
    </div>
  );
}