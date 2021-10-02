import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  albumName: String,
  albumImage: String,
  creator: String,
  year: Number,
  songs: [
    {
      songName: String,
      songLength: String,
      songUrl: String,
    },
  ],
});

// const songSchema = new mongoose.Schema();

let AlbumSchema = mongoose.model("AlbumSchema", albumSchema);

export default AlbumSchema;
