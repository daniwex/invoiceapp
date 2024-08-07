import { cookies } from "next/headers";
import { Invoice } from "@/app/DB/models/invoice";
import {connectToDB} from "../../DB/database.config";
import { NextResponse } from "next/server";

// formId: generateFormId(),
// name: { type: String },
// quantity: { type: Number },
// price: { type: Number },
// identifier: {type:String}
// const invoiceSchema = new Schema({
// formId:{
//   type:String
// },
// sender_address: {
//   type: String,
// },
// status:{type:String},
// sender_city: {
//   type: String,
// },
// sender_postcode: {},
// sender_country: {
//   type: String,
// },
// recipient_name: {
//   type: String,
// },
// recipient_email: {
//   type: String,
// },
// recipient_address: {
//   type: String,
// },
// recipient_city: {
//   type: String,
// },
// recipient_postcode: {
//   type: String,
// },
// recipient_country: {
//   type: String,
// },
// invoice_date: {
//   type: Date,
// },
// payment_terms: {
//   type: String,
// },
// project_description: {
//   type: String,
// },
// item_list: [subSchema],
// });
// street: "",
// city: "",
// pcode: "",
// country: "",
// recipient_name: "",
// recipient_email: "",
// recipient_address: "",
// recipient_city: "",
// recipient_pcode: "",
// recipient_country: "",
// invoice_date: "",
// project_terms: "30",
// project_description: "",
// item_list: {}

export const POST = async(req, res) => {
    const data = await req.json()
    const user = cookies().get('user_id_invoice').value
    try {
        await connectToDB();
        const invoice = await new Invoice({
            user:user,
            formId: data.formId,
            sender_address: data.street,
            status:data.status,
            sender_city:data.city,
            sender_postcode:data.pcode,
            sender_country:data.country,
            recipient_name:data.recipient_name,
            recipient_email:data.recipient_email,
            recipient_address:data.recipient_address,
            recipient_city:data.recipient_city,
            recipient_postcode:data.recipient_pcode,
            recipient_country:data.recipient_country,
            invoice_date:data.invoice_date,
            payment_terms:data.payment_terms,
            project_description: data.project_description,
        })
        invoice.item_list.push(...Object.values(data.item_list))
        invoice.save()
    return NextResponse.json({message:"draft saved"}, {status:201})
    } catch (error) {
        console.log(error)
    }
}

export const GET = async(req, res) => {
    const user = cookies().get('user_id_invoice').value
    try {
        await connectToDB();
        const invoices = await Invoice.find({user})
        return NextResponse.json(invoices, {status:200})
    } catch (error) {
        console.log(error)
    }
}