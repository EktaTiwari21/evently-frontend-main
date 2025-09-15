// File: components/Input.js
export default function Input(props) {
  return (
    <input
      {...props}
      // REFINEMENT: Removed fixed height, using padding for a more compact feel.
      className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-white/50"
    />
  );
}