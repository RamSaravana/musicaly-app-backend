import express from "express";

import AlbumSchema from "../models/albumsModel.js";

const router = express.Router();

export const getAlbums = async (req, res) => {
  try {
    const allAlbums = await AlbumSchema.find();

    res.status(200).json(allAlbums);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAlbum = async (req, res) => {
  const { id } = req.params;
  try {
    const album = await AlbumSchema.findById({ _id: id });

    res.status(200).json(album);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAlbum = async (req, res) => {
  const { albumName, albumImage, creator, year, songs } = req.body;

  const newAlbum = new AlbumSchema({
    albumName,
    albumImage,
    creator,
    year,
    songs,
  });

  try {
    await newAlbum.save();

    res.status(200).json(newAlbum);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSong = (req, res) => {
  const { name } = req.params;
  try {
    res.status(200).send(name);
  } catch (error) {}
};

export default router;
