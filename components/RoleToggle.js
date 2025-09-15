// File: components/RoleToggle.js
'use client'; // This is a Next.js directive that marks this as a client-side component, allowing us to use state.

export default function RoleToggle({ selectedRole, setSelectedRole }) {
  const getButtonClasses = (role) => {
    return `w-1/2 rounded-md py-2 text-sm font-medium transition-colors ${
      selectedRole === role
        ? 'bg-white text-black shadow-md'
        : 'bg-transparent text-gray-400 hover:bg-white/10'
    }`;
  };

  return (
    <div className="flex w-full rounded-lg bg-white/10 p-1">
      <button
        onClick={() => setSelectedRole('participant')}
        className={getButtonClasses('participant')}
      >
        Participant
      </button>
      <button
        onClick={() => setSelectedRole('organizer')}
        className={getButtonClasses('organizer')}
      >
        Organizer
      </button>
    </div>
  );
}