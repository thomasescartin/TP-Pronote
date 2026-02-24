export const requireProfessor = (req, res, next) => {
  if (req.user.role !== "Professor") {
    return res.status(403).json({ message: "Accés refusé" });
  }
  next;
};
