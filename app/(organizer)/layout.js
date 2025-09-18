// File: app/(organizer)/layout.js
import OrganizerNavbar from "@/components/OrganizerNavbar"; // The organizer navbar

export default function OrganizerLayout({ children }) {
  return (
    <main>
      <OrganizerNavbar />
      {children}
    </main>
  );
}