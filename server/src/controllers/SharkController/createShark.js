import Shark from "../../models/Shark.js";

/**
 * application/server/src/controllers/SharkController/createShark.js
 * this controller inserts a new Shark document into the database
 * author: Cynthia 🌻
 */
const createShark = async (request, response) => {
    try {
        const newShark = await Shark.create(request.body);
        response.status(200).json({
            message: 'successfully inserted a Shark to the database!',
            shark: newShark
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side'
        });
    }
}

export default createShark;