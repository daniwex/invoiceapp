import Link from "next/link";
import { getDate } from "../utility/utils";
import Invoice from "./Invoice";

export default function Invoices({ invoices }) {
  return (
    <div className="grid gap-y-6">
      {invoices.map((el, index) => {
        let name = el.recipient_name ? el.recipient_name : 'You will need to set the recipient\'s name'
        let d = el.invoice_date ? new Date().setDate(el.invoice_date) : new Date().toLocaleDateString().split('/').join(' ')
        let total = el.total ? el.total :  0
        return <Link href={`/dashboard/invoice/${el.formId}`}> <Invoice key={index} invoiceId={el.formId} recipient_name={name} date={d} total={total} status={el.status} /></Link>;
      })}
    </div>
  );
}
