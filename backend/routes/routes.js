const express = require("express");
const router = express.Router();
const phoneController = require("../controllers/phoneController");

// Middleware para adicionar cabeçalhos CORS
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Rota para criar um novo número de telefone
router.post("/contacts", phoneController.createPhone);

// Rota para buscar todos os números de telefone
router.get("/contacts", phoneController.getAllPhones);

// Rota para buscar um número de telefone por ID
router.get("/contacts/:id", phoneController.getPhoneById);

// Rota para atualizar um número de telefone por ID
router.put("/contacts/:id", phoneController.updatePhoneById);

// Rota para excluir um número de telefone por ID
router.delete("/contacts/:id", phoneController.deletePhoneById);

module.exports = router;
