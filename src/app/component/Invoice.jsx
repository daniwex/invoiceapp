'use client'
import Status from "./Status";
export default function Invoice({
  invoiceId,
  date,
  recipient_name,
  total,
  status,
}) {
  return (
    <div className="h-fit py-5 px-9 rounded-lg bg-white">
      <div className="grid grid-cols-6 place-items-center">
        <div className="font-bold"><span className="text-[#7C5DFA]">#</span>{invoiceId}</div>
        <div className="text-xs text-[#888EB0]">Due {date}</div>
        <div className="col-span-2 text-sm text-center text-[#888EB0]">{recipient_name}</div>
        <div className="text-sm font-bold">${total}</div>
        <div className="text-sm"><Status status={status} /></div>
      </div>
    </div>
  );
}
