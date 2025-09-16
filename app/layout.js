// File: app/layout.js
import "./globals.css";

export const metadata = {
  title: "Evently",
  description: "Your one-stop platform for amazing events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* UPDATED: Added Kreon and Junge fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@700&family=Inria+Sans&family=Inria+Serif&family=Irish+Grover&family=Itim&family=Jaldi&family=Jaini+Purva&family=Junge&family=Kreon&family=Space+Grotesk:wght@400;500;700&family=Stylish&family=Spectral:wght@700&display=swap" rel="stylesheet" />

        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      'dark-1': '#121212',
                      'dark-2': '#1E1E1E',
                      'dark-3': '#2A2A2A',
                      'light-1': '#FFFFFF',
                      'light-2': '#E5E7EB',
                    },
                    fontFamily: {
                      'irish-grover': ['"Irish Grover"', 'cursive'],
                      'jaini-purva': ['"Jaini Purva"', 'system-ui'],
                      'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
                      'stylish': ['"Stylish"', 'serif'],
                      'spectral': ['"Spectral"', 'serif'],
                      'jaldi': ['"Jaldi"', 'sans-serif'],
                      'itim': ['"Itim"', 'cursive'],
                      'inder': ['"Inder"', 'sans-serif'],
                      'inknut-antiqua': ['"Inknut Antiqua"', 'serif'],
                      'inria-serif': ['"Inria Serif"', 'serif'],
                      'inria-sans': ['"Inria Sans"', 'sans-serif'],
                      'kreon': ['"Kreon"', 'serif'], // Added new font
                      'junge': ['"Junge"', 'serif'], // Added new font
                    },
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}