// File: app/(app)/notifications/page.js
import Link from 'next/link';

// Mock data for tickets, which we'll display at the top
const myTickets = [
  { eventId: 1, eventTitle: 'Global Tech Summit 2025', eventDate: 'November 12-14, 2025', quantity: 2, imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop' },
  { eventId: 3, eventTitle: 'Art & Design Expo', eventDate: 'December 15-18, 2024', quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop' },
];

// Mock data for notifications
const notifications = [
    { id: 1, event: 'Summer Beats Festival', date: 'July 20, 2024', daysLeft: '25 days remaining', status: 'Postponed due to weather', statusColor: 'text-yellow-400' },
    { id: 2, event: 'Modern Art Exhibition', date: 'August 5, 2024', daysLeft: '41 days remaining', status: 'New time announced: 7 PM', statusColor: 'text-cyan-400' },
    { id: 3, event: 'Tech Innovators Summit', date: 'September 12, 2024', daysLeft: '79 days remaining', status: 'Tickets available now', statusColor: 'text-green-400' },
    { id: 4, event: 'Indie Rock Night', date: 'October 28, 2024', daysLeft: 'Event Ended', status: 'Event cancelled', statusColor: 'text-red-500' },
];

// Reusable component for the Ticket cards
const TicketCard = ({ ticket }) => (
    <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-dark-2/50 p-4 ring-1 ring-white/10 backdrop-blur-lg">
        <img src={ticket.imageUrl} alt={ticket.eventTitle} className="w-full md:w-48 h-32 md:h-full object-cover rounded-lg" />
        <div className="flex-1">
            <h3 className="text-xl font-bold text-white font-space-grotesk">{ticket.eventTitle}</h3>
            <p className="mt-1 text-gray-400">{ticket.eventDate}</p>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-lg text-white"><span className="font-bold">{ticket.quantity}</span> Ticket{ticket.quantity > 1 ? 's' : ''}</p>
                <Link href={`/events/${ticket.eventId}`} className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20">View Event</Link>
            </div>
        </div>
    </div>
);

// Reusable component for the Notification items from your Figma design
const NotificationItem = ({ notification }) => (
    <div className="flex items-start gap-6 rounded-2xl bg-dark-2/50 p-6 ring-1 ring-white/15 backdrop-blur-sm">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">{/* Icon placeholder */}</div>
        <div className="flex-1 space-y-2">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-lg font-bold text-white font-space-grotesk">{notification.event}</h4>
                    <p className="text-sm text-gray-400 font-space-grotesk">{notification.date}</p>
                </div>
                <p className="text-sm text-gray-300 font-medium font-space-grotesk">{notification.daysLeft}</p>
            </div>
            <p className="text-sm font-space-grotesk">
                <span className="text-gray-300">Status Update: </span>
                <span className={`font-bold ${notification.statusColor}`}>{notification.status}</span>
            </p>
        </div>
    </div>
);


export default function NotificationsPage() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-4xl mx-auto">

                {/* --- YOUR TICKETS SECTION --- */}
                <div className="mb-12">
                     <h2 className="font-spectral text-3xl font-bold text-white mb-6">Your Tickets</h2>
                     <div className="space-y-6">
                        {myTickets.map(ticket => <TicketCard key={ticket.eventId} ticket={ticket} />)}
                     </div>
                </div>

                {/* --- NOTIFICATIONS SECTION --- */}
                <div>
                    <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                        <h2 className="font-spectral text-3xl font-bold text-white">Notifications</h2>
                        <button className="text-sm font-bold text-gray-400 hover:text-white">Mark all as read</button>
                    </div>
                    <div className="space-y-4">
                        {notifications.map(notif => <NotificationItem key={notif.id} notification={notif} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}