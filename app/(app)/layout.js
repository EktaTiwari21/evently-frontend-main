// File: app/(app)/layout.js
import '../globals.css'; // <-- THE CORRECTED PATH: ../ tells it to go up one directory.
import AppLayout from '../../components/AppLayout';

// This layout will be applied to all pages inside the (app) route group.
export default function InternalAppLayout({ children }) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}