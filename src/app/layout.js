import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "AVIM Events | Luxury Royal Hospitality",
  description: "Crafting legendary celebrations with royal heritage and bespoke event management.",
  icons: {
    icon: "/images/avim-events/logos/logo_a_large.png",
    shortcut: "/images/avim-events/logos/logo_a_large.png",
    apple: "/images/avim-events/logos/logo_a_large.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=EB+Garamond:wght@400;500;600&family=Be+Vietnam+Pro:wght@400;500;600&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-on-background font-body-rt antialiased relative min-h-screen flex flex-col">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

