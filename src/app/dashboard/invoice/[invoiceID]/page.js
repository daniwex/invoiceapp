"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
export default function page() {
  const formId = usePathname().split("/")[3];
  const [oneInvoice, setOneInvoice] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const req = await fetch("/api/invoice/invoice_one", {
          method: "POST",
          body: JSON.stringify(formId),
        });
        if (req.ok) {
          const res = await req.json();
          setOneInvoice({ ...res });
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="py-10 px-5 sm:w-full sm:flex sm:justify-center sm:h-screen sm:overflow-y-scroll transition duration-300 ease-in">
      <div className="sm:w-3/5  p-5 h-fit">
        <div>
          <button
            className="sm:flex sm:items-center"
            onClick={() => router.back()}
          >
            <img className="pr-4" src="/assets/icon-arrow-left.svg" /> Go back
          </button>
        </div>
        <div className="sm:mt-10">
          <div className="sm:flex sm:justify-between bg-white h-fit py-6 px-10 items-center mb-10">
            <div className="">
              <span className="sm:text-sm text-[#888EB0] mr-7">Status</span>
              <span className="text-sm">{oneInvoice.status}</span>
            </div>
            <div className="sm:grid sm:grid-cols-3 text-sm gap-x-3">
              <button className="text-[#7C5DFA] text-center  bg-[#F9FAFE] h-fit px-5 py-2 rounded-full font-bold flex items-center justify-center">
                Edit
              </button>
              <button className="text-[#888EB0] text-center rounded-full  bg-[#373B53] h-fit py-2  font-bold flex items-center justify-center px-3">
                Delete
              </button>
              <button className="text-white rounded-full text-center  bg-[#7C5DFA] h-fit font-bold py-2  flex items-center justify-center px-3">
                Mark as Paid
              </button>
            </div>
          </div>
          <div className="h-fit py-10 px-10 bg-white">
            <div className="sm:flex sm:justify-between">
              <div>
                <Suspense fallback={<span className="text-black">Loading</span>}>
                  <span className="text-[#7C5DFA]">#</span>
                  {oneInvoice.formId}
                </Suspense>
                <div className="text-sm text-[#888EB0]">
                  {oneInvoice.project_description}
                </div>
              </div>
              <div className="text-sm text-[#888EB0]">
                <div>{oneInvoice.sender_address}</div>
                <div>{oneInvoice.sender_city}</div>
                <div>{oneInvoice.sender_postcode}</div>
                <div>{oneInvoice.sender_country}</div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:mt-10">
              <div>
                <div>
                  <div>
                    <span className="text-sm text-[#888EB0]">Invoice Date</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#888EB0]">Payment Due</span>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <div>
                  <span className="text-[#888EB0]">Bill to</span>
                </div>
                <div className="py-5">{oneInvoice.recipient_name}</div>
                <div className="text-[#888EB0]">
                  {oneInvoice.recipient_address}
                </div>
                <div className="text-[#888EB0]">
                  {oneInvoice.recipient_city}
                </div>
                <div className="text-[#888EB0]">
                  {oneInvoice.recipient_postcode}
                </div>
                <div className="text-[#888EB0]">
                  {oneInvoice.recipient_country}
                </div>
              </div>
              <div>
                <div className="text-sm text-[#888EB0]">Sent to</div>
                <div className="text-sm">{oneInvoice.recipient_email}</div>
              </div>
            </div>
            <div></div>
            <div className="h-fit bg-[#373B53] px-10 mt-10 sm:flex justify-between text-sm text-white py-5">
              <span>Amount Due</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
