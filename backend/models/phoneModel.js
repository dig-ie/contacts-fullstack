const mongoose = require("mongoose");

// Definição do esquema do telefone
const phoneSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
});

// Criação do modelo 'Phone' baseado no esquema
const Phone = mongoose.model("Phone", phoneSchema, "contacts");

module.exports = Phone;
