'use client'

import { useMemo, useState } from "react";

export default function Item({getNumber, getPrice, closebtn, item_name, quantityvalue=0, pricevalue=0, item_name_value}) {
 let [total, setTotal] = useState(0)
 function findTotal(){
    setTotal(Number(quantityvalue) * Number(pricevalue))
 }

 useMemo(() => findTotal(), [quantityvalue, pricevalue])
  return (
    <div className="my-2 text-sm">
      <div className="grid grid-cols-1 gap-y-4 mb-5">
        <label htmlFor="item_name" className="text-sm">
          Item Name
        </label>
        <input
          id="item_name"
          type="text"
          className=" border bg-[#F8F8FB] h-12 px-5"
          value={item_name_value}
          onChange={(e) => item_name(e)}
        />
      </div>
      <div className="grid grid-cols-5 gap-x-3 mb-5 place-items-center">
        <div className="">
          <label className="text-sm">Qty</label>
          <input
            type="number"
            className=" border bg-[#F8F8FB] h-16 px-5 w-full"
            onChange={(e) => {getNumber(e)}}
            defaultValue={quantityvalue}
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Price</label>
          <input
            type="number"
            className=" border bg-[#F8F8FB] h-16 px-5 w-full"
            onChange={(e) => { getPrice(e)}}
            defaultValue={pricevalue}

          />
        </div>
        <div className="">
          <label className="text-sm">Total</label>
          <div>{total=9}</div>
        </div>
        <div>
          <i style={{color:'#888EB0'}} class="fas fa-trash cursor-pointer" onClick={closebtn}></i>
        </div>
      </div>
    </div>
  );
}
