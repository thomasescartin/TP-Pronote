import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send(
    "<h1> Mon super serveur qui fonctionne grâce à la bénédiction de Nissrine</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Serveur tourne sur http://localhost:${PORT}`);
});
