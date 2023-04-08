/**
 * application/server/src/models/Shark.js
 * this file defines a Shark schematic & exports a compiled Shark model
 * author: Cynthia 🌻
 */
import mongoose from "mongoose";

const SharkSchematic = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a shark cannot be nameless!']
    }
});

export default mongoose.model('Shark', SharkSchematic);