"use client";
import Link from "next/link";
import { useEffect, useState, useTransition, Suspense } from "react";
import Form from "../component/Form";
import { useRouter } from "next/navigation";
import { generateFormId } from "../utility/utils";
import Message from "../component/Message";
import Invoices from "../component/Invoices";
import { useAppContext } from "../store/context";

export default function page() {
  let [invoices, setInvoices] = useState([]);
  const [createForm, setCreateForm] = useState(false);
  let [items_list, setlist] = useState({});
  let [data, setData] = useState({});
  let { theme, messageSetter, message } = useAppContext();
  const [error, setError] = useState({});
  if (message != "") {
    setTimeout(() => messageSetter("", 5000, false), message.time);
  }

  let [fieldData, setFieldData] = useState({
    formId: generateFormId(),
    street: "",
    city: "",
    pcode: "",
    country: "",
    recipient_name: "",
    recipient_email: "",
    recipient_address: "",
    recipient_city: "",
    recipient_pcode: "",
    recipient_country: "",
    invoice_date: "",
    project_terms: "1",
    project_description: "",
    item_list: {},
    status: "draft",
  });
  function handleInputChange(value, n, identifier) {
    setData((data = { ...data, identifier, [n]: value }));
    setlist(
      (items_list) => (items_list = { ...items_list, [data.identifier]: data })
    );
  }

  function handleData(key, value) {
    setFieldData((fieldData) => ({ ...fieldData, [key]: value }));
  }

  async function saveDraft(e) {
    e.preventDefault();
    fieldData["item_list"] = { ...items_list };
    try {
      const req = await fetch("/api/invoice", {
        method: "POST",
        body: JSON.stringify(fieldData),
      });
      if (req.ok) {
        const res = await req.json();
        messageSetter(res.message, 5000, true);
        {
          setTimeout(() => messageSetter("", 9000, false), message.time);
        }
        setCreateForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function saveData(e) {
    e.preventDefault();
    if (Object.values(fieldData).some((el) => el == "")) {
      alert("need more data");
      return;
    }
    fieldData["item_list"] = { ...items_list };
    fieldData["status"] = "pending";
    try {
      const req = await fetch("/api/invoice", {
        method: "POST",
        body: JSON.stringify(fieldData),
      });
      if (req.ok) {
        const res = await req.json();
        messageSetter(res.message, 5000, true);
        {
          setTimeout(() => messageSetter("", 5000, false), message.time);
        }
        setCreateForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const req = await fetch("/api/invoice");
        if (req.ok) {
          const response = await req.json();
          setInvoices([...response]);
          // console.log(...response)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [createForm]);
  return (
    <div
      className={`py-10 px-5 sm:w-full sm:flex sm:justify-center sm:h-screen  transition duration-300 ease-in ${
        theme == "light" ? "bg-[#F8F8FB]" : "bg-[#0C0E16] text-white"
      }`}
    >
      <div className="sm:w-3/5">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">Invoices</h2>
            <span className="text-sm text-[#888EB0]">
              {invoices.length} invoices
            </span>
          </div>
          <div className="grid grid-cols-2 place-items-center">
            <select className="bg-transparent text-sm">
              <option>Filter by status</option>
              <option>Filter by pending</option>
              <option>Filter by paid</option>
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
            {createForm ? (
              <Form
                formTitle="New Invoice"
                closeform={() => setCreateForm(false)}
                saveDraft={saveDraft}
                handleData={handleData}
                handleInputChange={handleInputChange}
                fieldData={fieldData}
                saveData={saveData}
              />
            ) : (
              <></>
            )}
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
            <div className="sm:mt-20">
              <Suspense fallback={<span className="text-black">Loading</span>}>
                <Invoices invoices={invoices} />
              </Suspense>
            </div>
          )}
        </div>
        {message.mess != "" && message.start ? (
          <>
            <Message message={message.mess} show="96vw" />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
