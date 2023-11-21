import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { redirect, notFound } from "next/navigation";

import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";

import EditInvoiceForm from "@/app/ui/invoices/edit-form";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  }
}) {

  const [invoice, customers] = await Promise.all([fetchInvoiceById(params.id), fetchCustomers()]);

  if (!invoice) {
    notFound();
  }

  return (
    <main className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Invoices',
            href: 'dashboard/invoices',
          },
          {
            label: 'Edit Invoices',
            href: `dashboard/invoices/${params?.id}/edit`,
            active: true,
          }
        ]}
      />
      <EditInvoiceForm customers={customers} invoice={invoice} />
    </main>
  )
}
