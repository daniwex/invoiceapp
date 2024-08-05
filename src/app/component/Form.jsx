"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Item from "@/app/component/Item";
import {id} from "../utility/utils";

export default function Form({ left = "5%", closeform, formTitle }) {
  let [itemsList, setItemsList] = useState([]);
  let [quantity, setQuantity] = useState(0);
  let [price, setPrice] = useState(0);
  let [idd, setId] = useState('')
  const router = useRouter();
  function closebtn() {
    return 3;
  }

  function generateId(){
    let genId = id()
    setId(genId)
  }

  function removeHandler(id){
    setItemsList(itemsList => itemsList.filter(el => el.key != id))
  }

  function addNewItem(e) {
    e.preventDefault();
    setItemsList((itemsList = [...itemsList, <Item />]));
  }
  return (
    <div
      className=" z-20 h-screen overflow-y-scroll w-[95vw] overflow-x-hidden bg-abs"
      style={{ position: "absolute", left, top: 0 }}
    >
      <div className="w-2/4 bg-white px-10 p-14 rounded-e-3xl text-sm">
        <h2 className="font-bold text-2xl">{formTitle}</h2>
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
                className=" border bg-[#F8F8FB] h-12 px-5"
              />
            </div>
            <div className="grid grid-cols-3 gap-x-3">
                <div className="">
                  <label className="text-sm">City</label>
                  <input
                    type="text"
                    className=" border bg-[#F8F8FB] h-12 px-5 w-full"
                  />
                </div>
                <div className="">
                  <label className="text-sm">Post Code</label>
                  <input
                    type="text"
                    className=" border bg-[#F8F8FB] h-12 px-5 w-full"
                  />
                </div>
              <div className="">
                <label htmlFor="address" className="text-sm">
                  Country
                </label>
                <input
                  id="address"
                  type="text"
                  className=" border bg-[#F8F8FB] h-12 px-5"
                />
              </div>
            </div>
            <div className="text-[#7C5DFA] font-bold py-5">Bill To</div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Client's name
              </label>
              <input
                id="address"
                type="text"
                className=" border bg-[#F8F8FB] h-12 px-5"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Client's email
              </label>
              <input
                id="address"
                type="email"
                className=" border bg-[#F8F8FB] h-12 px-5"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Street address
              </label>
              <input
                id="address"
                type="text"
                className=" border bg-[#F8F8FB] h-12 px-5"
              />
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              <div className="">
                <label className="text-sm">City</label>
                <input
                  type="text"
                  className=" border bg-[#F8F8FB] h-12 px-5 w-full"
                />
              </div>
              <div className="">
                <label className="text-sm">Post Code</label>
                <input
                  type="text"
                  className=" border bg-[#F8F8FB] h-12 px-5 w-full"
                />
              </div>
            <div className="">
              <label htmlFor="address" className="text-sm">
                Country
              </label>
              <input
                id="address"
                type="text"
                className=" border bg-[#F8F8FB] h-12 px-5"
              />
            </div>
            </div>
          <div className="grid grid-cols-2 my-7 gap-x-3">
          <div className="">
              <label htmlFor="date" className="text-sm block">
                Invoice Date
              </label>
              <input
                id="date"
                type="date"
                className=" border bg-[#F8F8FB] h-12 px-5 w-full"
              />
            </div>
            <div className="">
              <label htmlFor="description" className="text-sm block">
                Project Terms
              </label>
              <select className="bg-transparent h-12 border px-5 w-full">
                <option>Next 30 days</option>
              </select>
            </div>
          </div>
           
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="description" className="text-sm">
                Project description
              </label>
              <input
                id="description"
                type="text"
                className=" border bg-[#F8F8FB] h-12 px-5"
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
                generateId()
                setItemsList((itemsList) => [
                  ...itemsList,
                  <Item key={idd} closebtn={(e) => removeHandler(idd)} />,
                ]);
              }}
            >
              <img className="pr-3" src="/assets/icon-plus.svg" /> Add new Item
            </button>
            <div className="flex justify-between h-fit py-7 text-sm">
              <button
                onClick={closeform}
                className="text-[#7C5DFA] text-center  bg-[#F9FAFE] h-14 px-5 rounded-full font-bold flex items-center justify-center"
              >
                Discard
              </button>
              <div className="grid grid-cols-2 gap-x-2 ">
                <button className="text-[#888EB0] text-center rounded-full  bg-[#373B53] h-14 font-bold flex items-center justify-center px-3">
                  Save as Draft
                </button>
                <button className="text-white rounded-full text-center  bg-[#7C5DFA] h-14 font-bold flex items-center justify-center px-3">
                  Save & Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
