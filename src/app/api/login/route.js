import { cookies } from "next/headers";
import { user } from "@/app/DB/models/user";
import {connectToDB} from "../../DB/database.config";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (req, res) => {
  let { email, password } = await req.json();
  try {
    await connectToDB();
    const u = await user.findOne({ email });
    if(!u){
        return NextResponse.json({messsage:"account not found, please try again"},{status:404})
    }
    const confirmPassword = bcryptjs.compare(password, u.password)
    if(!confirmPassword){
        return NextResponse.json({messsage:"password is incorrect, please try again"},{status:404})
    }
    cookies().set({
      name: "user_id_invoice",
      value: u._id,
      httpOnly: true,
    });
    return NextResponse.json({message:"login successfull"},{ status: 201 });
  } catch (error) {
    console.log(error);
  }
};
