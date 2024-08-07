import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 6060;
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDb");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });
app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
