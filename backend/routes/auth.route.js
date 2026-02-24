import Router from "express";
import { validate } from "../middleware/validate.middleware";
import { authSchema } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", validate(authSchema), register);

export default router;
