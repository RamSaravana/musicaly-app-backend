import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import albumRoutes from "./Routes/albumRoutes.js";

const app = express();

app.use(bodyParser.urlencoded({ limit: "15mb", extended: "true" }));
app.use(bodyParser.json({ limit: "15mb", extended: "true" }));

dotenv.config();
app.use(cors());

app.use("/albums", albumRoutes);

const CONNECTION_URL =
  "mongodb+srv://ramsaravana:Password1234@cluster0.rtmc8.mongodb.net/musicaly?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.log({ message: error.message });
  });
