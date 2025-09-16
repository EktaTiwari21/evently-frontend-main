// File: app/(app)/my-events/create/page.js
'use client';

import Link from 'next/link';
import { useState, useRef } from 'react'; // Import useRef for the file input

// --- ICONS ---
const CalendarIcon = () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
const ClockIcon = () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
// --- END ICONS ---


// This is the fully restored "smart" input component
const FormInput = ({ label, name, value, onChange, type = 'text', placeholder, isTextArea = false }) => (
    <div>
        <label className="block text-xl font-inder text-white mb-3">{label}</label>
        {isTextArea ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows="4"
                className="w-full bg-dark-2/25 rounded-lg border border-white/50 backdrop-blur-md p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
        ) : (
          <div className="relative">
            {type === 'date' && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><CalendarIcon /></div>}
            {type === 'time' && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><ClockIcon /></div>}
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={`w-full h-12 bg-dark-2/25 rounded-lg border border-white/50 backdrop-blur-md px-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50 focus:outline-none ${ (type === 'date' || type === 'time') && 'pl-10 appearance-none bg-transparent'}`}
                style={type === 'date' || type === 'time' ? { colorScheme: 'dark' } : {}}
            />
          </div>
        )}
    </div>
);

export default function CreateEventPage() {
    // State for the form data
    const [eventData, setEventData] = useState({
        title: '', description: '', location: '', date: '', time: '', price: '', quantity: '',
    });
    // --- NEW: State and ref for file upload ---
    const [bannerFile, setBannerFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setEventData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // --- NEW: Handler for the file input ---
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setBannerFile(e.target.files[0]);
        }
    };

    // --- NEW: Handler to trigger the hidden file input ---
    const handleBannerClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = { ...eventData, banner: bannerFile ? bannerFile.name : 'No file selected' };
        console.log('Event Data Submitted:', finalData);
        alert('Event data has been logged to the console! Check with F12.');
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-inknut-antiqua font-bold text-white mb-8">Event Details</h1>
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                <FormInput label="Event Title" name="title" value={eventData.title} onChange={handleChange} />
                <FormInput label="Event Description" name="description" value={eventData.description} onChange={handleChange} isTextArea={true} />
                <FormInput label="Event Location" name="location" value={eventData.location} onChange={handleChange} isTextArea={true} />
                <FormInput label="Event Date" name="date" value={eventData.date} onChange={handleChange} type="date" />
                <FormInput label="Event Time" name="time" value={eventData.time} onChange={handleChange} type="time" />

                {/* --- UPDATED: Event Banner section is now functional --- */}
                <div>
                  <label className="block text-xl font-inder text-white mb-3">Event Banner</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden" // The actual file input is hidden
                    accept="image/*" // Accept only image files
                  />
                  <div
                    onClick={handleBannerClick}
                    className="w-full h-48 bg-dark-2/25 rounded-lg border-2 border-dashed border-white/50 backdrop-blur-md flex flex-col items-center justify-center text-gray-400 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    {bannerFile ? (
                        <p className="text-white">{bannerFile.name}</p>
                    ) : (
                        <>
                            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span>Click to upload banner</span>
                        </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormInput label="Ticket Price" name="price" value={eventData.price} onChange={handleChange} type="number" placeholder="e.g., 299.00" />
                  <FormInput label="Ticket Quantity" name="quantity" value={eventData.quantity} onChange={handleChange} type="number" placeholder="e.g., 500" />
                </div>

                <div className="flex justify-end items-center gap-4 pt-8">
                    <button type="button" className="rounded-full bg-dark-2/25 px-6 py-2 text-lg font-inder text-white ring-1 ring-white/50 backdrop-blur-md hover:bg-white/10">
                        Save Draft
                    </button>
                    <button type="submit" className="rounded-full bg-white px-6 py-2 text-lg font-inder text-black hover:bg-gray-200">
                        Publish Event
                    </button>
                </div>
            </form>
        </div>
    );
}