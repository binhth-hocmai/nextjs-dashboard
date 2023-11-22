import React from 'react';

import { Metadata } from 'next';

import SidebNav from '@/app/ui/dashboard/sidenav';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  keywords: 'Acme, acme dashboard',
  metadataBase: new URL('https://nextjs-dashboard-jq24.vercel.app'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SidebNav />
      </div>
      {/* <div className="flex-grow p-6 md:overflex-y-auto md:p-2"></div> */}
      {children}
    </div>
  );
}
