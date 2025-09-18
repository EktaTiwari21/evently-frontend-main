// File: app/(app)/wallet/page.js
'use client';

// A new, simpler component that just renders an image in a styled container.
const PaymentMethodIcon = ({ src, alt }) => (
  <div className="flex h-28 w-full items-center justify-center rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm transition-transform hover:scale-105">
    {/* REFINEMENT: Increased the icon size to h-12 to "fill the box" */}
    <img src={src} alt={alt} className="h-12" />
  </div>
);

export default function WalletPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4 py-8 text-white">
      {/* Wallet Balance Card */}
      <div className="w-full max-w-lg rounded-2xl bg-white/10 p-8 text-center shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
        <h2 className="font-space-grotesk text-2xl font-medium leading-tight text-gray-400">
          Amount in Wallet
        </h2>
        {/* REFINEMENT: Corrected font size for a balanced, professional look */}
        <p className="mt-4 font-space-grotesk text-7xl font-bold text-white">
          ₹12,500
        </p>
      </div>

      {/* Payment Methods Section */}
      <div className="w-full max-w-4xl text-center">
        <h2 className="font-stylish text-5xl text-white">
          Payment Methods
        </h2>
        {/* REFINEMENT: Using <img> tags and swapped UPI for Apple Pay */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <PaymentMethodIcon src="/icons/visa.svg" alt="Visa" />
          <PaymentMethodIcon src="/icons/mastercard.svg" alt="Mastercard" />
          <PaymentMethodIcon src="/icons/gpay.svg" alt="Google Pay" />
          <PaymentMethodIcon src="/icons/apple-pay.svg" alt="Apple Pay" />
        </div>
      </div>
    </div>
  );
}