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
        {/* Google Fonts for our custom typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* UPDATED: Added all new fonts from your dashboard design */}
        <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@700&family=Inria+Sans&family=Inria+Serif&family=Irish+Grover&family=Itim&family=Jaldi&family=Jaini+Purva&family=Space+Grotesk:wght@400;500;700&family=Stylish&display=swap" rel="stylesheet" />

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
                      'inknut-antiqua': ['"Inknut Antiqua"', 'serif'],
                      'inria-serif': ['"Inria Serif"', 'serif'],
                      'itim': ['"Itim"', 'cursive'],
                      'jaldi': ['"Jaldi"', 'sans-serif'],
                      'inria-sans': ['"Inria Sans"', 'sans-serif'],
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