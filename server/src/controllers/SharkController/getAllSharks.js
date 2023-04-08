import Shark from "../../models/Shark.js";

/**
* application/server/src/controllers/SharkController/getAllSharks.js
 * this controller returns a list of Shark documents
 * author: Cynthia 🌻
 */
const getAllSharks = async (request, response) => {
    try {
        const sharks = await Shark.find();

        response.status(200).json({
            sharks
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side'
        });
    }
}

export default getAllSharks;