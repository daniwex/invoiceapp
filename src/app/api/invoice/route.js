import { cookies } from "next/headers";
import { Invoice } from "@/app/DB/models/invoice";
import {connectToDB} from "../../DB/database.config";
import { NextResponse } from "next/server";
