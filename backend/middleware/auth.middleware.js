import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { z } from "zod";
import { createProfessor, findUserByEmail } from "../models/user.model.js";

export const authMiddleware = (res, req, next) => {
  const token = req.headers.autorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Accès refusé" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalide" });
  }
};
export const authSchema = z.object({
  email: z.email().min(3, "L'email doit contenir au moins trois caractères"),
  password: z.string().min(8),
});

export const register = async (req, res) => {
  const { email, password } = req.body;
  const existing = await findUserByEmail(email);

  if (existing) return res.status(400).json({ message: "Email déjà existant" });

  const hashed = await argon2.hash(password);
  const id = await createProfessor(email, hashed);

  res.status(201).json({ message: "professeur créé", id, email });
};
