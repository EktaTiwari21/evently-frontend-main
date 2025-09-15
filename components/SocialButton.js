// File: components/SocialButton.js

// This new version is much simpler and more reliable.
// It uses a standard <img> tag to display an image file.
export default function SocialButton({ iconSrc, children, ...props }) {
  return (
    <button
      {...props}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10"
    >
      <img
        src={iconSrc}
        alt={`${children} logo`}
        className="h-5 w-5" // You can adjust the size here if needed
      />
      <span>{children}</span>
    </button>
  );
}