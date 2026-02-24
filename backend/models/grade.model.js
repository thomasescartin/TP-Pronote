import { Pool } from "../config/db.js";

export const createGrade = async (value, professorId, studientId) => {
  const [result] = await pool.query(
    "INSERT INTO grades (values, student_id, professor_id) Values (?, ?, ?)",
    [value, professorId, studientId]
  );
  return result.insertId;
};
