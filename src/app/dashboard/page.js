"use client";
import Link from "next/link";
import { useState } from "react";
import Form from "../component/Form"
export default function page() {
  const [invoices, setInvoices] = useState([]);
  const [createForm, setCreateForm] = useState(false)
  return (
    <div className="py-10 px-5 sm:w-full sm:flex sm:justify-center sm:h-screen">
      <div className="sm:w-3/5">
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
              className="bg-[#7C5DFA] text-white h-11 flex items-center w-24 justify-center rounded-full cursor-pointer sm:hidden"
              href="/dashboard/create"
            >
              <span className="bg-white mr-2 h-7 w-7 flex items-center justify-center rounded-full">
                <img src="/assets/icon-plus.svg" />
              </span>
              New 
            </Link>
            <button
            onClick={() => setCreateForm(true)}
              className="bg-[#7C5DFA] text-white h-11 sm:flex items-center w-24 justify-center rounded-full cursor-pointer hidden"
            >
              <span className="bg-white mr-2 h-7 w-7 flex items-center justify-center rounded-full">
                <img src="/assets/icon-plus.svg" />
              </span>
              New
            </button>
            {
                createForm ?
                <Form formTitle="New Invoice" closeform={() => setCreateForm(false)} />
                :
                <></>
            }
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
    </div>
  );
}
