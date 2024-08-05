"use client";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [invoices, setInvoices] = useState([]);
  return (
    <div className="py-10 px-5">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Invoices</h2>
          <span className="text-sm text-[#888EB0]">7 invoices</span>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <select className="bg-transparent">
            <option>Filter</option>
          </select>
          <Link
            className="bg-[#7C5DFA] text-white h-11 flex items-center w-24 justify-center rounded-full cursor-pointer"
            href="/dashboard/create"
          >
            <span className="bg-white mr-2 h-7 w-7 flex items-center justify-center rounded-full">
              <img  src="/assets/icon-plus.svg" />
            </span>
            New
          </Link>
        </div>
      </div>
      <div>
        {invoices.length == 0 ? (
          <div className="h-[76vh] flex items-center justify-center">
            <div className="grid grid-cols-1 place-items-center gap-y-5 text-center">
              <img className="w-fit" src="/assets/illustration-empty.svg" />
              <h2 className="font-bold text-xl">There is nothing here</h2>
              <p className="w-2/3 text-sm text-[#888EB0]">
                Create an invoice by clicking the <b>New</b> button and get
                started
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
