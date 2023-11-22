import { Metadata } from 'next';

import { fetchCustomers } from '@/app/lib/data';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export const metadata: Metadata = {
  title: 'Create Invoices',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Invoices',
            href: '/dashboard/invoices',
          },
          {
            label: 'Create Invoices',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}