import express from "express";

import { PostLogin, register, userHome, userLogin, userRegister } from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/", userHome);

router.get("/register", userRegister);
router.post("/register", register);
router.get("/login", userLogin);
router.post("/login", PostLogin);
export default router;