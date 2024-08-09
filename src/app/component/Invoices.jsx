import Link from "next/link";
import { getDate, getFullAmount } from "../utility/utils";
import Invoice from "./Invoice";

export default function Invoices({ invoices }) {
  return (
    <div className="grid gap-y-6">
      {invoices.map((el, index) => {
        let name = el.recipient_name ? el.recipient_name : 'You will need to set the recipient\'s name'
        let total = getFullAmount(el.item_list)
        return <Link key={index} href={`/dashboard/invoice/${el.formId}`}> <Invoice  invoiceId={el.formId} recipient_name={name} date={el.invoice_date} total={total} status={el.status} /></Link>;
      })}
    </div>
  );
}
