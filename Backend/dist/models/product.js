import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
    },
    photo: {
      type: String,
      required: [true, "Please Add Your Photo"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter Price"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter Stock"],
    },
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", schema);
