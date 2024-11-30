import React from 'react';
import { PlusCircle } from 'lucide-react';
import { TransactionsTableProps } from '@/types';

const TabTransaction = ({ transactionsText }: TransactionsTableProps) => {
  return (
    <div className="rounded-lg bg-mainAccent p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-title font-semibold">
          All Support:
          <span className="text-offWhite ms-2">2 Nekotip Coin</span>
        </p>
        <button className="text-title flex items-center gap-2 font-medium">
          <span>Download CSV</span>
          <PlusCircle className="h-5 w-5" />
        </button>
      </div>
      <table className="w-full text-left text-sm tracking-wide shadow-hover">
        <thead className="bg-thirdAccent text-center text-xs uppercase">
          <tr>
            <th className="px-4 py-2">Tanggal</th>
            <th className="px-4 py-2">Supporter</th>
            <th className="px-4 py-2">Unit dan Potongan</th>
            <th className="px-4 py-2">Dukungan Diterima</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transactionsText.length > 0 ? (
            transactionsText.map((transaction, index) => (
              <tr
                key={index}
                className="border-b bg-secondaryAccent text-start"
              >
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.supporter}</td>
                <td className="px-4 py-2">{transaction.unit}</td>
                <td className="px-4 py-2">{transaction.received}</td>
                <td className="px-4 py-2">{transaction.action}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2 text-center" colSpan={5}>
                You don't have any transaction yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between text-sm">
        <p>Showing 0 to 0 of 0 entries</p>
        <div className="flex gap-2">
          <button className="mb-2 rounded-md border bg-thirdAccent px-4 py-2 font-semibold hover:shadow-hover">
            Previous
          </button>
          <button className="mb-2 rounded-md border bg-thirdAccent px-4 py-2 font-semibold hover:shadow-hover">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabTransaction;
