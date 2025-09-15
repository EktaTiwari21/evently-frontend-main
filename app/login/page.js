// File: app/login/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
import RoleToggle from '../../components/RoleToggle';

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('participant');
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Simulating login for role: ${selectedRole}`);

    if (selectedRole === 'participant') {
      router.push('/discover');
    } else {
      router.push('/dashboard');
    }
  };

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

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white/10 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm"
      >
        <RoleToggle selectedRole={selectedRole} setSelectedRole={setSelectedRole} />

        <h2 className="text-center text-2xl font-bold text-white">
          {selectedRole === 'participant' ? 'User Login' : 'Organizer Login'}
        </h2>

        <div className="space-y-3">
          <Input id="email" type="email" required placeholder="Email or Username" />
          <Input id="password" type="password" required placeholder="Password" />
        </div>

        <div className="text-right text-sm">
          <Link href="#" className="font-medium text-white underline hover:text-gray-300">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit">Log In</Button>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white/10 px-2 text-gray-400 backdrop-blur-sm">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <SocialButton iconSrc="/icons/google.svg">Google</SocialButton>
            <SocialButton iconSrc="/icons/apple.svg">Apple</SocialButton>
            <SocialButton iconSrc="/icons/facebook.svg">Facebook</SocialButton>
          </div>
        </div>

        <p className="text-center text-sm text-gray-300">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-white underline hover:text-gray-100">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
} // <-- This was the missing closing brace. It is now fixed.