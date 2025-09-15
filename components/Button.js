// File: components/Button.js
export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      // REFINEMENT: Removed fixed height, using padding for a sleeker look.
      className="w-full justify-center rounded-lg bg-white px-4 py-3 text-sm font-bold text-black shadow-[0px_0px_20px_rgba(255,255,255,0.3)] transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {children}
    </button>
  );
}