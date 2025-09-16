// File: components/AppNavbar.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-xl font-medium font-space-grotesk ${
        isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default function AppNavbar() {
  return (
    <header className="bg-black/80 shadow-md backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/discover" className="font-irish-grover text-3xl font-bold text-white tracking-wider">
              Evently
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-12">
            <NavLink href="/discover">Events</NavLink>
            <NavLink href="/wallet">$Wallet</NavLink>
            <NavLink href="/history">History</NavLink>
            <NavLink href="/notifications">Notifications</NavLink>
          </nav>
          {/* --- THIS IS THE CORRECTED PART --- */}
          <div className="flex items-center">
            <Link href="/profile" className="block transition-transform hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold ring-2 ring-white/20 hover:ring-white/40 transition-all">
                {/* We will replace this with a real user image or initials later */}
                <img
                  src="https://placehold.co/48x48/1E1E1E/FFFFFF?text=U"
                  alt="User Profile"
                  className="rounded-full"
                />
              </div>
            </Link>
          </div>
          {/* --- END OF CORRECTED PART --- */}
        </div>
      </div>
    </header>
  );
}