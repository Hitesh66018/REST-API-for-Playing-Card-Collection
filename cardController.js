import Card from "../models/cardModel.js";

// Create a new card
export const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all cards
export const getAllCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};

// Get card by ID
export const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update card
export const updateCard = async (req, res) => {
  try {
    const updated = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete card
export const deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
