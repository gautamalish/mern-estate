import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
config();
const app = express();
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

app.get("/", async (req, res) => {
  res.status(200).send("Get Request");
});


