const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
// app.use(cors({ origin: "http://localhost:3001" }));
// URL de conexão do MongoDB
const mongoURI = "mongodb://localhost:27017/contacts";

// Configuração da conexão com o MongoDB
mongoose.connect(mongoURI);

// Verificação da conexão
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conexão bem-sucedida ao MongoDB!");
});

// Middleware para processar requisições JSON
app.use(express.json());

// Middleware para adicionar as rotas ao servidor Express
app.use(routes);

// Inicia o servidor Express
const PORT = process.env.PORT || 3000; // Alterado para 3000 como exemplo, ajuste conforme necessário
app.listen(PORT, () => {
  console.log(`Servidor Express ouvindo na porta ${PORT}`);
});
