import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  suit: {
    type: String,
    enum: ["Hearts", "Diamonds", "Clubs", "Spades"],
    required: true,
  },
  rank: {
    type: String,
    enum: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King"
    ],
    required: true,
  },
  description: String,
}, { timestamps: true });

export default mongoose.model("Card", cardSchema);
