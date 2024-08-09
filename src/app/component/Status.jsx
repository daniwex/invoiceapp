import React from "react";

export default function Status({ status }) {
  return <span className={`${status == 'draft' ? 'bg-[#97979741] text-[#373B53]' : status == 'pending' ? 'bg-[#ff910028] text-[#FF8F00]' : 'bg-[#33d6a02a] text-[#33D69F]'} py-1 px-7`}>{status}</span>;
}
