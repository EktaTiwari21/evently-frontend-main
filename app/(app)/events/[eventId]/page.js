// File: app/(app)/events/[eventId]/page.js
'use client'; // We need this to use the useState hook for the ticket counter

import { useState } from 'react';
import Link from 'next/link';

// This is "mock data" for a single event. In Phase 4, we will fetch this data
// from your backend API based on the eventId from the URL.
const mockEvent = {
  id: 1,
  title: 'Global Tech Summit 2025',
  organizer: 'TechCorp',
  date: 'November 12-14, 2025',
  location: 'Moscone Center, San Francisco, CA',
  description: 'Join the brightest minds in technology as we explore the future of AI, quantum computing, and sustainable tech. This three-day summit features keynote speakers from industry giants, hands-on workshops, and unparalleled networking opportunities. Whether you are a developer, an entrepreneur, or a tech enthusiast, the Global Tech Summit is the place to be.',
  price: 599.00, // Price per ticket
  imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop',
};

export default function EventDetailsPage() {
  // This state variable will track the number of tickets the user wants to buy.
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setTicketQuantity(prev => Math.max(1, prev + amount)); // Ensure quantity is at least 1
  };

  const totalPrice = (mockEvent.price * ticketQuantity).toFixed(2);

  return (
    <div className="text-white">
      {/* Banner Image */}
      <div className="w-full h-60 md:h-80 lg:h-96 overflow-hidden relative">
        <img src={mockEvent.imageUrl} alt={mockEvent.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-4xl mx-auto p-6 md:p-8">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk">{mockEvent.title}</h1>
        <p className="mt-2 text-lg text-gray-400">Organized by {mockEvent.organizer}</p>

        {/* Date and Location Info */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 text-gray-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span>{mockEvent.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>{mockEvent.location}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/10" />

        {/* About the Event */}
        <div>
          <h2 className="text-2xl font-bold font-space-grotesk">About this Event</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">{mockEvent.description}</p>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/10" />

        {/* --- TICKET PURCHASE SECTION --- */}
        <div className="bg-dark-2/50 rounded-lg p-6 ring-1 ring-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-xl font-bold">Price per Ticket</p>
              <p className="text-3xl font-bold font-space-grotesk mt-1">₹{mockEvent.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button onClick={() => handleQuantityChange(-1)} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-xl font-bold">-</button>
              <span className="text-2xl font-bold w-12 text-center">{ticketQuantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-xl font-bold">+</button>
            </div>
            <div>
              <p className="text-xl font-bold text-right mt-4 md:mt-0">Total Price</p>
              <p className="text-3xl font-bold font-space-grotesk mt-1 text-right">₹{totalPrice}</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-white py-3 text-base font-semibold text-black shadow-sm transition-colors hover:bg-gray-200">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}