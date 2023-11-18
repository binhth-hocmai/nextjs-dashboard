import React from 'react'

import SidebNav from '@/app/ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SidebNav />
      </div>
      {/* <div className="flex-grow p-6 md:overflex-y-auto md:p-2"></div> */}
      {children}
    </div>
  )
}