import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cardRoutes from "./src/routes/cardRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/cards", cardRoutes);

app.get("/", (req, res) => {
  res.send("🃏 Playing Card API Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
