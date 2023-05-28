import express from "express";
import showsRouter from "./shows.js";
const router = express.Router();

router.use("/api/shows", showsRouter);

export default router;
