/**
 * application/server/src/routers/SharkRouter.js
 * this file handles API calls for the Shark resource
 * author: Cynthia 🌻
 */
import express from 'express';
const router = express.Router();

import SharkController from '../controllers/SharkController/_.js';

router.get('/api/sharks', SharkController.getAllSharks);
router.post('/api/sharks', SharkController.createShark);

export default router;