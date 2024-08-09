import React from "react";

export default function Modal({ invoiceId, cancelBtn, confirmBtn }) {
  return (
    <div
      className={`z-20 h-screen overflow-y-scroll w-[100vw] overflow-x-hidden bg-abs m-0 flex items-center justify-center `}
      style={{ position: "absolute", left:0, top: 0 }}
    >
      <div className="h-fit py-10 px-7 w-fit bg-white rounded-md">
        <h2 className="text-2xl font-bold">Confirm Deletion</h2>
        <p className="text-sm text-[#888EB0] py-5 w-4/5">
          Are you sure you want to delete invoice {invoiceId}? This action
          cannot be undone.
        </p>
        <div className="float-right grid grid-cols-2 gap-x-3 text-sm">
          <button onClick={cancelBtn}>Cancel</button>
          <button onClick={confirmBtn}>Delete</button>
        </div>
      </div>
    </div>
  );
}
