import { pool } from "../config/db.js";

export const createStudent = async (name, professorId) => {
  const [result] = await pool.query(
    "INSERT INTO studients (name, professor_id) VALUES (?, ?)",
    [name, professorId]
  );
};
return result.insertId;
