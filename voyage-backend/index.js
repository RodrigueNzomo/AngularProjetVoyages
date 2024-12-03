// Importation des modules nécessaires
require("dotenv").config(); // Charge les variables d'environnement depuis .env
const express = require("express"); // Framework pour créer des routes HTTP
const mongoose = require("mongoose"); // Bibliothèque MongoDB pour Node.js

// Initialisation de l'application Express
const app = express();

// Configuration du port
const PORT = process.env.PORT || 5000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Route de test pour vérifier le backend
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running!" });
});

// Connexion à MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Arrête l'application en cas d'échec de la connexion
  }
};

// Démarrage du serveur
app.listen(PORT, async () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
  await connectToMongoDB(); // Connexion à MongoDB après le démarrage du serveur
});
