import mongoose, { Schema, model, models } from "mongoose";

// const subSchema = new Schema({
//   name: { type: String },
//   quantity: { type: Number },
//   price: { type: Number },
//   identifier: {type:String}
// });

const invoiceSchema = new Schema({
  user:{
    type:mongoose.Types.ObjectId,
    ref:'users'
  },
  formId:{
    type:String
  },
  sender_address: {
    type: String,
  },
  status:{type:String},
  sender_city: {
    type: String,
  },
  sender_postcode: {
    type:String
  },
  sender_country: {
    type: String,
  },
  recipient_name: {
    type: String,
  },
  recipient_email: {
    type: String,
  },
  recipient_address: {
    type: String,
  },
  recipient_city: {
    type: String,
  },
  recipient_postcode: {
    type: String,
  },
  recipient_country: {
    type: String,
  },
  invoice_date: {
    type: Date,
  },
  payment_terms: {
    type: String,
  },
  project_description: {
    type: String,
  },
  item_list: [],
});

export const Invoice = models.Invoice || model("Invoice", invoiceSchema);
