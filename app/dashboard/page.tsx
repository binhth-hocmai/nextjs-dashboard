import { sql } from '@vercel/postgres';
import { Suspense } from 'react';

import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { fetchCardData } from "@/app/lib/data";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import CardWrapper, { Card } from '../ui/dashboard/cards';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';

export const dynamic = "force-dynamic";

interface Props{}

export default async function Page(props: Props) {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const numberOfInvoices = await sql<number>`SELECT COUNT(*) FROM invoices`;
  // const { numberOfInvoices, totalPendingInvoices, totalPaidInvoices, numberOfCustomers } = await fetchCardData();
  
  return (
    <main className="w-full">
      <h1 className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices.rows[0].count ?? '0'} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        <Suspense fallback={<CardsSkeleton/>}>
          <CardWrapper />
        </Suspense>
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart  />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}