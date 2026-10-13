import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import { StoreProvider } from '@/lib/storeContext';
import { AppShell } from '@/components/AppShell';

export const metadata: Metadata = {
  title: 'Arasiyal Arivu (அரசியல் அறிவு) — TN Political Transparency Portal',
  description: 'Know your government. Explore verified Tamil Nadu MLAs, MPs, Ministers, official salaries, allowances, constitutional powers, election records, and public works.',
  keywords: ['Tamil Nadu Politics', 'Arasiyal Arivu', 'Tamil Nadu MLA Salary', 'Tamil Nadu MP', 'Stalin', 'TN Legislative Assembly', 'Constituencies', 'Civic Transparency'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <StoreProvider>
            <AppShell>{children}</AppShell>
          </StoreProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
