'use client'

import { useMemo, useState } from "react";

export default function Item({getNumber, getPrice, closebtn}) {
 let [total, setTotal] = useState(0)
 let [quantity, setQunatity] = useState(0)
 let [price, setPrice] = useState(0)
 function findTotal(){
    setTotal(Number(quantity) * Number(price))
 }

 useMemo(() => findTotal(), [quantity, price])
  return (
    <div className="my-2">
      <div className="grid grid-cols-1 gap-y-4 mb-5">
        <label htmlFor="item_name" className="text-sm">
          Item Name
        </label>
        <input
          id="item_name"
          type="text"
          className=" border-2 bg-[#F8F8FB] h-16 px-5"
        />
      </div>
      <div className="grid grid-cols-5 gap-x-3 mb-5 place-items-center">
        <div className="">
          <label className="text-sm">Qty</label>
          <input
            type="number"
            className=" border-2 bg-[#F8F8FB] h-16 px-5 w-full"
            onChange={(e) => setQunatity(e.target.value)}
            value={quantity}
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Price</label>
          <input
            type="number"
            className=" border-2 bg-[#F8F8FB] h-16 px-5 w-full"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="">
          <label className="text-sm">Total</label>
          <div>{total}</div>
        </div>
        <div>
          <i style={{color:'#888EB0'}} class="fas fa-trash" onClick={closebtn}></i>
        </div>
      </div>
    </div>
  );
}
