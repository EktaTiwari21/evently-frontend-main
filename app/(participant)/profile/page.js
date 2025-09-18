// File: app/(app)/profile/page.js
import Link from 'next/link';

// Mock data for the current user. In Phase 4, this will come from our backend.
const currentUser = {
  name: 'Jayesh Thakkar',
  email: 'jayesh@example.com',
  role: 'Organizer',
  profileImageUrl: 'https://placehold.co/128x128/1E1E1E/FFFFFF?text=JT'
};

export default function UserProfilePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold leading-6 text-white">My Profile</h1>
            <p className="mt-2 text-sm text-gray-400">
              Your personal account details.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href="/profile/edit"
              className="block rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-8 flow-root">
          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-8">
              <img
                src={currentUser.profileImageUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full ring-2 ring-white/50"
              />
              <div>
                <h2 className="text-3xl font-bold text-white font-space-grotesk">{currentUser.name}</h2>
                <p className="mt-1 text-gray-300">{currentUser.email}</p>
                <p className="mt-2 inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20">
                  {currentUser.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}