// File: components/AppNavbar.js
import Link from 'next/link';

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
            <Link href="/discover" className="text-xl font-medium text-gray-300 hover:text-white font-space-grotesk">
              Events
            </Link>
            <Link href="/wallet" className="text-xl font-medium text-gray-300 hover:text-white font-space-grotesk">
              $Wallet
            </Link>
            <Link href="/history" className="text-xl font-medium text-gray-300 hover:text-white font-space-grotesk">
              History
            </Link>
            <Link href="/notifications" className="text-xl font-medium text-gray-300 hover:text-white font-space-grotesk">
              Notifications
            </Link>
          </nav>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold ring-2 ring-white/50">
              <img src="https://placehold.co/66x66" alt="User Profile" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}