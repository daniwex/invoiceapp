import { cookies } from "next/headers";
import { user } from "@/app/DB/models/user";
import {connectToDB} from "../../DB/database.config";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (req, res) => {
  let { email, password } = await req.json();
  try {
    await connectToDB();
    const salt = await bcryptjs.genSalt(10)
    password = await bcryptjs.hash(password, salt)
    const newUser = new user({ email, password });
    newUser.save();
    cookies().set({
      name: "user_id_invoice",
      value: newUser._id,
      httpOnly: true,
    });
    return NextResponse.json({message:"Registration successfully"},{ status: 201 });
  } catch (error) {
    console.log(error);
  }
};
