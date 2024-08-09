"use client";

import { useMemo, useState, useRef } from "react";
import {  useAppContext } from "../store/context";

export default function Item({
  getNumber,
  getPrice,
  closebtn,
  item_name,
  quantityvalue,
  pricevalue,
  item_name_value,
}) {
  const [total, setTotal] = useState(0)
  const [q, setq] = useState(quantityvalue)
  const [p, setp] = useState(pricevalue)
  function findTotal(){
    setTotal(Number(p) * Number(q))
  }
  const {theme} = useAppContext()

  useMemo(() => findTotal(), [q, p]);
  return (
    <div className="my-2 text-sm">
      <div className="grid grid-cols-1 gap-y-4 mb-5">
        <label htmlFor="item_name" className="text-sm">
          Item Name
        </label>
        <input
          id="item_name"
          type="text"
          className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
          value={item_name_value}
          onChange={(e) => item_name(e)}
        />
      </div>
      <div className="grid grid-cols-5 gap-x-3 mb-5 place-items-center">
        <div className="">
          <label className="text-sm">Qty</label>
          <input
            type="number"
            className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
            onChange={(e) => {
              getNumber(e);
              setq(e.target.value)
            }}
            value={quantityvalue}
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Price</label>
          <input
            type="number"
            className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
            onChange={(e) => {
              getPrice(e);
              setp(e.target.value)
            }}
            value={pricevalue}
          />
        </div>
        <div className="">
          <label className="text-sm">Total</label>
          <div>{total}</div>
        </div>
        <div>
          <i
            style={{ color: "#888EB0" }}
            class="fas fa-trash cursor-pointer"
            onClick={closebtn}
          ></i>
        </div>
      </div>
    </div>
  );
}
