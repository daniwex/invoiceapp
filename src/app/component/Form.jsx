"use client";
import { useState } from "react";
import Item from "@/app/component/Item";
import { id } from "../utility/utils";
import {  useAppContext } from "../store/context";

export default function Form({
  left = "4.5%",
  closeform,
  formTitle,
  saveDraft,
  fieldData,
  formtype = "create",
  saveData,
  handleData,
  handleInputChange,
}) {
  let [itemsList, setItemsList] = useState([]);
  let [idd, setId] = useState(id());
  const {theme} = useAppContext()


  function removeHandler(id) {
    setItemsList(
      (itemsList) => (itemsList = itemsList.filter((el) => el.key != id))
    );
  }
  return (
    <div
      className={`z-20 h-screen overflow-y-scroll w-[95vw] overflow-x-hidden bg-abs m-0 `}
      style={{ position: "absolute", left, top: 0 }}
    >
      <div className={`w-2/4 bg-white px-10 m-0  transition duration-300 ease-in p-14 rounded-e-3xl text-sm ${theme == 'light' ? 'bg-[#F8F8FB]' : 'bg-[#141625] text-white'}`}>
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
                className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                value={fieldData["street"]}
                onChange={(e) => handleData("street", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              <div className="">
                <label className="text-sm">City</label>
                <input
                  type="text"
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["city"]}
                  onChange={(e) => handleData("city", e.target.value)}
                />
              </div>
              <div className="">
                <label className="text-sm">Post Code</label>
                <input
                  type="text"
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["pcode"]}
                  onChange={(e) => handleData("pcode", e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="address" className="text-sm">
                  Country
                </label>
                <input
                  id="address"
                  type="text"
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["country"]}
                  onChange={(e) => handleData("country", e.target.value)}
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
                className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                value={fieldData["recipient_name"]}
                onChange={(e) => handleData("recipient_name", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Client's email
              </label>
              <input
                id="address"
                type="email"
                className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                value={fieldData["recipient_email"]}
                onChange={(e) => handleData("recipient_email", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 mb-5">
              <label htmlFor="address" className="text-sm">
                Street address
              </label>
              <input
                id="address"
                type="text"
                className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                value={fieldData["recipient_address"]}
                onChange={(e) =>
                  handleData("recipient_address", e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              <div className="">
                <label className="text-sm">City</label>
                <input
                  type="text"
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["recipient_city"]}
                  onChange={(e) => handleData("recipient_city", e.target.value)}
                />
              </div>
              <div className="">
                <label className="text-sm">Post Code</label>
                <input
                  type="text"
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["recipient_pcode"]}
                  onChange={(e) =>
                    handleData("recipient_pcode", e.target.value)
                  }
                />
              </div>
              <div className="">
                <label htmlFor="address" className="text-sm">
                  Country
                </label>
                <input
                  id="address"
                  type="text"
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["recipient_country"]}
                  onChange={(e) =>
                    handleData("recipient_country", e.target.value)
                  }
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
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["invoice_date"]}
                  onChange={(e) => handleData("invoice_date", e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="description" className="text-sm block">
                  Project Terms
                </label>
                <select
                  className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                  value={fieldData["project_terms"]}
                  onChange={(e) => handleData("project_terms", e.target.value)}
                >
                  <option>Next 1 day</option>
                  <option>Next 7 days</option>
                  <option>Next 14 days</option>
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
                className={`border  h-12 px-5 w-full ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
                value={fieldData["project_description"]}
                onChange={(e) =>
                  handleData("project_description", e.target.value)
                }
              />
            </div>
            <div className="text-[#7C5DFA] font-bold py-5">Item List</div>
            {itemsList.length > 0 ? (
              itemsList.map((el, index) => <span key={index}>{el}</span>)
            ) : (
              <></>
            )}
            <button
              className={`text-[#7C5DFA] text-center w-full  h-14 font-bold flex items-center rounded-full justify-center ${theme == 'dark' ? 'bg-[#373B53]': 'bg-[#F8F8FB]'}`}
              onClick={(e) => {
                e.preventDefault();
                setId(id());
                setItemsList((itemsList) => [
                  ...itemsList,
                  <Item
                    key={idd}
                    item_name={(e) =>
                      handleInputChange(e.target.value, "item_name", idd)
                    }
                    getPrice={(e) =>
                      handleInputChange(e.target.value, "item_price", idd)
                    }
                    getNumber={(e) =>
                      handleInputChange(e.target.value, "item_number", idd)
                    }
                    closebtn={() => removeHandler(idd)}
                  />,
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
                <button
                  onClick={(e) => saveDraft(e)}
                  className={` text-center rounded-full  bg-[#373B53] h-14 font-bold flex items-center justify-center px-3 ${theme == 'dark' ? 'text-white': 'text-[#888EB0]'}`}
                >
                  Save as Draft
                </button>
                <button
                  onClick={saveData}
                  className="text-white rounded-full text-center  bg-[#7C5DFA] h-14 font-bold flex items-center justify-center px-3"
                >
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
