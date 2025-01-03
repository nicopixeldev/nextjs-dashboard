'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice, DeleteInvoiceState } from '@/app/lib/actions';
import { useActionState } from 'react';

export function CreateInvoice({ numberOfInvoices }: { numberOfInvoices: number }) {
  return (
    <Link
      href="/dashboard/invoices/create"
      className={`flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        numberOfInvoices >= 10 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600'
      }`}
      aria-disabled={numberOfInvoices >= 10}
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const initialState: DeleteInvoiceState = { message: "" };
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  const [state, formAction] = useActionState(deleteInvoiceWithId, initialState);  
  
  // todo - implement validation - show error messages from state
  console.log('state', state);

  return (
    <form action={formAction}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
