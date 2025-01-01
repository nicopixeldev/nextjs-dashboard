import CreateInvoiceForm from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCreateInvoiceData } from '@/app/lib/data';
 
export default async function Page() {
  const {
    customers,
    numberOfInvoices,
  } = await fetchCreateInvoiceData();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <CreateInvoiceForm customers={customers} numberOfInvoices={numberOfInvoices} />
    </main>
  );
}