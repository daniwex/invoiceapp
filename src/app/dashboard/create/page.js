"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Item from "@/app/component/Item";

export default function page() {
  let [itemsList, setItemsList] = useState([]);
  let [quantity, setQuantity] = useState(0);
  let [price, setPrice] = useState(0);
  const router = useRouter();

  function closebtn() {
    return 3;
  }

  function addNewItem(e) {
    e.preventDefault();
    setItemsList((itemsList = [...itemsList, <Item />]));
  }
  return (
    <div className="py-10 px-5 min-h-screen">
      <button className="flex items-center" onClick={() => router.back()}>
        <span className="mr-5">
          <img src="/assets/icon-arrow-left.svg" />{" "}
        </span>{" "}
        Go back
      </button>
      <div className="mt-10">
        <h2 className="font-bold text-2xl">New Invoice</h2>
        <div className="py-5">
          <form>
            <div className="text-[#7C5DFA] font-bold pb-5">Bill From</div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Street Address
              </label>
              <input
                id="address"
                type="text"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-3 mb-5">
              <div className="">
                <label className="text-sm">City</label>
                <input
                  type="text"
                  className=" border-2 bg-[#F8F8FB] h-16 px-5 w-full"
                />
              </div>
              <div className="">
                <label className="text-sm">Post Code</label>
                <input
                  type="text"
                  className=" border-2 bg-[#F8F8FB] h-16 px-5 w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Country
              </label>
              <input
                id="address"
                type="text"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="text-[#7C5DFA] font-bold py-5">Bill To</div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Client's name
              </label>
              <input
                id="address"
                type="text"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Client's email
              </label>
              <input
                id="address"
                type="email"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Street address
              </label>
              <input
                id="address"
                type="text"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-3 mb-5">
              <div className="">
                <label className="text-sm">City</label>
                <input
                  type="text"
                  className=" border-2 bg-[#F8F8FB] h-16 px-5 w-full"
                />
              </div>
              <div className="">
                <label className="text-sm">Post Code</label>
                <input
                  type="text"
                  className=" border-2 bg-[#F8F8FB] h-16 px-5 w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Country
              </label>
              <input
                id="address"
                type="text"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="date" className="text-sm">
                Invoice Date
              </label>
              <input
                id="date"
                type="date"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="description" className="text-sm">
                Project Terms
              </label>
              <select className="bg-transparent h-16 border-2 px-5">
                <option>Next 30 days</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="description" className="text-sm">
                Project description
              </label>
              <input
                id="description"
                type="text"
                className=" border-2 bg-[#F8F8FB] h-16 px-5"
              />
            </div>
            <div className="text-[#7C5DFA] font-bold py-5">Item List</div>
            {itemsList.length > 0 ? (
              itemsList.map((el, index) => <span key={index}>{el}</span>)
            ) : (
              <></>
            )}
            <button
              className="text-[#7C5DFA] text-center w-full bg-[#F9FAFE] h-14 font-bold flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                setItemsList((itemsList) =>[...itemsList, <Item closebtn={() => console.log(true)} />]
                );
              }}
            >
              <img className="pr-3" src="/assets/icon-plus.svg" /> Add new Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
