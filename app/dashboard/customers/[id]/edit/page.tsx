
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Customer } from '@/app/lib/definitions';
import { updateCustomer } from '@/app/lib/actions';
import Form from '@/app/ui/customers/edit-form';

export default async function Page({ params }: { params: { id: string } }) 
{
  const id = params.id;
  
  const customer = await fetchCustomerById(id);
   if (!customer) {
    notFound();
  }
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer}  />
    </main>
  );
}