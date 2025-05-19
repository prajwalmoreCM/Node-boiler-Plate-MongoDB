import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import "./config/db.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
// app.use("/api/users", userRoutes);
connectDB();

const PORT = process.env.PORT || 5000; // eslint-disable-line no-undef
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // eslint-disable-line no-undef
});
