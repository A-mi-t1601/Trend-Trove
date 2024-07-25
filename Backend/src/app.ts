import express from "express";

//Importing Routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

const port = 2712;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working with /api/v1");
});

//Using Routes
app.use("/api/v1/user", userRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Port is Listening http://localhost:${port}`);
});
