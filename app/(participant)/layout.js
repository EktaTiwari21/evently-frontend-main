// File: app/(participant)/layout.js
import ParticipantNavbar from "@/components/ParticipantNavbar"; // The new participant navbar

export default function ParticipantLayout({ children }) {
  return (
    <main>
      <ParticipantNavbar />
      {children}
    </main>
  );
}