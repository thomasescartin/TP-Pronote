import { pool } from "../config/db.js";

export const createProfessor = async (email, password) => {
  const [result] = await pool.query(
    "INSERT INTO studients (email, password) VALUES (?, ?)",
    [email, password]
  );
};
return result.insertId;
