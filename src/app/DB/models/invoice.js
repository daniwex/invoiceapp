import { Schema, model, models } from "mongoose";

const subSchema = new Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

const invoiceSchema = new Schema({
  sender_address: {
    type: String,
  },
  sender_city: {
    type: String,
  },
  sender_postcode: {},
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
  item_list: [subSchema],
});

export const Invoice = models.Invoice || model("Invoice", invoiceSchema);
