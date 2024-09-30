const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir un modelo
const Item = mongoose.model("Item", new mongoose.Schema({ name: String }));

// Rutas
app.get("/api/pais", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/api/pais", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
