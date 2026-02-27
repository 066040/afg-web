import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://yourdomain.com"; // <-- burayı değiştir
const SITE_NAME = "Mühendis"; // <-- istersen ad/marka
const AUTHOR_NAME = "Mühendis"; // <-- adın/brandin

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Software Engineer`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Computer Engineering student building scalable mobile and web applications. Flutter, Node.js, NestJS, PostgreSQL.",

  applicationName: SITE_NAME,

  keywords: [
    "Software Engineer",
    "Computer Engineering",
    "Flutter",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Mobile App Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Software Engineer`,
    description:
      "Building scalable mobile and web apps. Flutter, Next.js, NestJS, PostgreSQL.",
    locale: "en_US",
    images: [
      {
        url: "/og.png", // (istersen sonra ekleriz) public/og.png
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Open Graph Image`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Software Engineer`,
    description:
      "Building scalable mobile and web apps. Flutter, Next.js, NestJS, PostgreSQL.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}