// File: components/AppLayout.js
import AppNavbar from './AppNavbar';

export default function AppLayout({ children }) {
  return (
    // REFINEMENT: Changed bg-dark-1 to bg-black for a sleeker, more unified look.
    <div className="min-h-screen bg-black">
      <AppNavbar />
      <main>
        {/* The content of our individual pages will be rendered here. */}
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}