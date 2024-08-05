import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    email:{
        type:String,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please provide a valid email",
          ],
        required:[true,"please enter your email"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"]
    }
})

export const user = models.users || model("users", userSchema)