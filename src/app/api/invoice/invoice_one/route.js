import { cookies } from "next/headers";
import { user } from "@/app/DB/models/user";
import { connectToDB } from "../../../DB/database.config";
import { NextResponse } from "next/server";
import { Invoice } from "@/app/DB/models/invoice";

export const POST = async (req, res) => {
  const formId = await req.json();
  try {
    await connectToDB()
    const invoice = await Invoice.findOne({formId})
    return NextResponse.json(invoice, {status:200})
  } catch (error) {
    console.log(error)
  }
};



export const DELETE = async (req, res) => {
    const formId = await req.json();
    try {
        await connectToDB()
        const invoice = await Invoice.findOneAndDelete({formId})
        return NextResponse.json({message:"invoice was successfully deleted"}, {status:200})
      } catch (error) {
        console.log(error)
      }
}