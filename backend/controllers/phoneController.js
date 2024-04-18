const Phone = require("../models/phoneModel");

// Função para criar um novo número de telefone
exports.createPhone = async (req, res) => {
  try {
    const { phoneNumber, contactName } = req.body;
    const newPhone = await Phone.create({ phoneNumber, contactName });
    res.status(201).json(newPhone);
  } catch (error) {
    console.error("Erro ao criar número de telefone:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Função para buscar todos os números de telefone
exports.getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
    console.log("SUCESSO ------------------1");
  } catch (error) {
    console.error("Erro ao buscar números de telefone:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Função para buscar um número de telefone por ID
exports.getPhoneById = async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    if (!phone) {
      return res
        .status(404)
        .json({ error: "Número de telefone não encontrado" });
    }
    res.status(200).json(phone);
  } catch (error) {
    console.error("Erro ao buscar número de telefone por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Função para atualizar um número de telefone por ID
exports.updatePhoneById = async (req, res) => {
  try {
    const phone = await Phone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!phone) {
      return res
        .status(404)
        .json({ error: "Número de telefone não encontrado" });
    }
    res.status(200).json(phone);
  } catch (error) {
    console.error("Erro ao atualizar número de telefone por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Função para excluir um número de telefone por ID
exports.deletePhoneById = async (req, res) => {
  try {
    const phone = await Phone.findByIdAndDelete(req.params.id);
    if (!phone) {
      return res
        .status(404)
        .json({ error: "Número de telefone não encontrado" });
    }
    res.status(204).end();
  } catch (error) {
    console.error("Erro ao excluir número de telefone por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
