// File: app/page.js
import Link from 'next/link';

const SecureIcon = () => <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.78-2.73 9.563A4.5 4.5 0 0012 21a4.5 4.5 0 002.73-1.437C13.009 17.78 12 14.517 12 11zM12 11c0-3.517.009-6.78 1.73-9.563A4.5 4.5 0 0012 3a4.5 4.5 0 00-1.73 1.437C11.991 4.22 12 7.483 12 11z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18" /></svg>;
const SmartIcon = () => <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const SimpleIcon = () => <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;

export default function HomePage() {
  return (
    <div className="bg-black text-light-1">
      {/* --- Navbar Section --- */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="font-irish-grover text-3xl font-bold text-white tracking-wider">
                Evently
              </Link>
            </div>
            {/* --- THIS IS THE UPDATED PART --- */}
            <div className="flex items-center">
              <Link href="/login" className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                Login
              </Link>
            </div>
            {/* --- END OF UPDATED PART --- */}
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div
        className="relative flex h-screen items-center justify-center"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 font-jaini-purva text-white text-center text-[200px] md:text-[300px] leading-[1] drop-shadow-2xl">
          Evently
        </h1>
      </div>

      {/* --- Features Section --- */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="mb-6"><SmartIcon /></div>
              <h3 className="text-3xl font-bold text-white">Smart</h3>
              <p className="mt-4 text-base leading-7 text-light-2">Highlight automated ticketing, event tokenization, and streamlined operations for ultimate efficiency.</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-6"><SecureIcon /></div>
              <h3 className="text-3xl font-bold text-white">Secure</h3>
              <p className="mt-4 text-base leading-7 text-light-2">Emphasize blockchain-backed transparency and anti-fraud measures for trustworthy transactions.</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-6"><SimpleIcon /></div>
              <h3 className="text-3xl font-bold text-white">Simple</h3>
              <p className="mt-4 text-base leading-7 text-light-2">Focus on an intuitive UI for both organizers and participants, simplifying every step of the event journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Call to Action Section --- */}
      <div className="bg-[#111827] text-center py-24 px-6">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to Revolutionize Your Events?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-light-2">
          Join the Evently platform today and step into the future of event management. Whether you're an organizer or a participant, a seamless experience awaits.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/signup?role=organizer" className="rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Become an Organizer
          </Link>
          <Link href="/events" className="rounded-md px-8 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white transition-colors hover:bg-white/10">
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
}