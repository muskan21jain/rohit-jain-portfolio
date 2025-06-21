import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Dr. Rohit Jain, MD | Gastrointestinal & HPB Surgeon',
  description: 'Dr. Rohit Jain is a trusted Gastrointestinal & Hepato-pancreato-biliary (HPB) Surgeon based at KGMU, Lucknow, delivering expert care in complex gastrointestinal surgeries.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dr. Rohit Jain, MD | Gastrointestinal & HPB Surgeon',
    description: 'Expert care in complex gastrointestinal surgeries. Assistant Professor at KGMU, Lucknow.',
    siteName: 'Dr. Rohit Jain, MD',
    images: [{
      url: `${siteUrl}/og-image.png`, // Assume an OG image is created
      width: 1200,
      height: 630,
      alt: 'Dr. Rohit Jain, Gastrointestinal Surgeon',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Rohit Jain, MD | Gastrointestinal & HPB Surgeon',
    description: 'Expert care in complex gastrointestinal surgeries.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Rohit Jain",
  "jobTitle": "Gastrointestinal & Hepato-pancreato-biliary (HPB) Surgeon",
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "King George’s Medical University (KGMU)"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "King George’s Medical University (KGMU), Lucknow"
  },
  "knowsAbout": "Gastrointestinal Surgery, Hepato-pancreato-biliary Surgery, Esophageal Surgery, Corrosive Esophageal Stricture, Demeester Colonic Pull-Up",
  "url": siteUrl,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
