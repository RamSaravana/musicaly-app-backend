import express from "express";

import {
  getAlbums,
  createAlbum,
  getAlbum,
  getSong,
} from "../controllers/albums.js";

const router = express.Router();

router.get("/", getAlbums);
router.get("/:id", getAlbum);
router.post("/", createAlbum);
router.get("/:id", getSong);

export default router;
