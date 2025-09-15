// File: app/signup/page.js
'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';

function SignupForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  const [isOrganizer, setIsOrganizer] = useState(role === 'organizer');

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-4 bg-black"
      style={{
        backgroundImage: 'radial-gradient(ellipse 97% 155% at 15% 25%, rgba(200, 200, 200, 0.20) 0%, rgba(200, 200, 200, 0) 30%), radial-gradient(ellipse 94% 150% at 85% 35%, rgba(150, 150, 150, 0.15) 0%, rgba(150, 150, 150, 0) 40%), radial-gradient(ellipse 68% 109% at 50% 75%, rgba(220, 220, 200, 0.25) 0%, rgba(220, 220, 200, 0) 35%), radial-gradient(ellipse 89% 143% at 30% 90%, rgba(180, 180, 180, 0.10) 0%, rgba(180, 180, 180, 0) 50%), radial-gradient(ellipse 89% 143% at 70% 10%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 25%)'
      }}
    >
      <header className="absolute top-0 left-0 right-0 p-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-irish-grover text-3xl font-bold text-white tracking-wider">
            Evently
          </Link>
          <Link href="/" className="text-sm font-medium text-white underline hover:text-gray-300">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white/10 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">

        <h2 className="text-center text-3xl font-bold text-white">
          {role === 'organizer' ? 'Create an Organizer Account' : 'Create an Account'}
        </h2>

        <div className="space-y-4">
          <Input id="fullName" name="fullName" type="text" required placeholder="Full Name" />
          <Input id="email" name="email" type="email" required placeholder="Email Address" />
          <Input id="password" name="password" type="password" required placeholder="Password" />
        </div>

        {role === 'organizer' && (
          <div className="flex items-center">
            <input
              id="isOrganizer"
              name="isOrganizer"
              type="checkbox"
              checked={isOrganizer}
              onChange={(e) => setIsOrganizer(e.target.checked)}
              className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-white focus:ring-gray-500"
            />
            <label htmlFor="isOrganizer" className="ml-3 block text-sm text-gray-300">
              I want to create and manage events
            </label>
          </div>
        )}

        <Button type="submit">
          Sign Up
        </Button>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-dark-2 px-2 text-gray-400">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <SocialButton iconSrc="/icons/google.svg">Google</SocialButton>
            {/* --- THIS IS THE CORRECTED LINE --- */}
            <SocialButton iconSrc="/icons/apple.svg">Apple</SocialButton>
            <SocialButton iconSrc="/icons/facebook.svg">Facebook</SocialButton>
          </div>
        </div>

        <p className="text-center text-sm text-gray-300">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-white underline hover:text-gray-100">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function SignupPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignupForm />
        </Suspense>
    )
}