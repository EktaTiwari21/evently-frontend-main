// File: app/(app)/history/page.js
'use client';

// Mock Data for demonstration purposes
const eventHistory = [
  { id: 1, title: 'Tech Conference 2023', date: 'Oct 26, 2023', status: 'Attended', statusColor: 'bg-green-500/10 text-green-400' },
  { id: 2, title: 'Music Festival 2023', date: 'Aug 15, 2023', status: 'Cancelled', statusColor: 'bg-red-500/10 text-red-400' },
  { id: 3, title: 'Art Exhibition 2023', date: 'Jul 22, 2023', status: 'Attended', statusColor: 'bg-green-500/10 text-green-400' },
];

const transactionHistory = [
  { id: 1, date: 'Oct 20, 2023', description: 'Ticket Purchase: Tech Conference 2023', amount: -75.00 },
  { id: 2, date: 'Aug 16, 2023', description: 'Refund: Music Festival 2023', amount: 120.00 },
  { id: 3, date: 'Jul 15, 2023', description: 'Ticket Purchase: Art Exhibition 2023', amount: -30.00 },
];

// Reusable component for an item in the Event History list
const EventHistoryItem = ({ item }) => (
  <div className="flex justify-between items-center bg-gray-900/50 rounded-lg p-4">
    <div>
      <h3 className="font-space-grotesk text-lg font-bold text-white">{item.title}</h3>
      <p className="font-space-grotesk text-sm text-gray-400">{item.date}</p>
    </div>
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${item.statusColor}`}>
      {item.status}
    </span>
  </div>
);

// Reusable component for an item in the Transaction History list
const TransactionHistoryItem = ({ item }) => (
  <div className="flex justify-between items-center border-b border-white/10 py-4">
    <div>
      <p className="font-space-grotesk text-base text-white">{item.description}</p>
      <p className="font-space-grotesk text-sm text-gray-400">{item.date}</p>
    </div>
    <p className={`font-space-grotesk text-base font-medium ${item.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
      {item.amount > 0 ? `+₹${item.amount.toFixed(2)}` : `-₹${Math.abs(item.amount).toFixed(2)}`}
    </p>
  </div>
);

export default function HistoryPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Event History Column */}
      <div className="space-y-8">
        <h1 className="font-stylish text-6xl text-white text-center">Event History</h1>
        <div className="rounded-2xl bg-white/5 p-6 space-y-4 ring-1 ring-white/10 backdrop-blur-md">
          {eventHistory.map(item => <EventHistoryItem key={item.id} item={item} />)}
        </div>
      </div>

      {/* Transaction History Column */}
      <div className="space-y-8">
        <h1 className="font-stylish text-6xl text-white text-center">Transaction History</h1>
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md">
           {transactionHistory.map(item => <TransactionHistoryItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}