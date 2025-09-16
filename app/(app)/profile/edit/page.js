// File: app/(app)/profile/edit/page.js
'use client'; // Needed for the form

import Link from 'next/link';
import Input from '../../../../components/Input'; // Go up four levels
import Button from '../../../../components/Button';

export default function EditProfilePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold leading-6 text-white">Edit Profile</h1>
        <p className="mt-2 text-sm text-gray-400">
          Update your personal information below.
        </p>

        <form className="mt-8 space-y-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <Input id="fullName" name="fullName" type="text" required defaultValue="Jayesh Thakkar" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <Input id="email" name="email" type="email" required defaultValue="jayesh@example.com" />
            </div>
             <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">New Password (optional)</label>
              <Input id="password" name="password" type="password" placeholder="Leave blank to keep current password" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/10">
            <Link href="/profile" className="text-sm font-semibold text-white hover:underline">
              Cancel
            </Link>
            <div className="w-40">
              <Button type="submit">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}