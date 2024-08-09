import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  deleteProduct,
  getAdminProduct,
  getAllCategories,
  getAllProduct,
  getSingleProduct,
  NewProduct,
  updateProduct,
} from "../controllers/product.js";

const app = express.Router();

//Create New Product
app.post("/new", adminOnly, singleUpload, NewProduct);

//All Product
app.get("/all", getAllProduct);

//Category Wise Product
app.get("/categories", getAllCategories);

//Admin Product
app.get("/admin-product", adminOnly, getAdminProduct);

//Update and Delete Product
app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
