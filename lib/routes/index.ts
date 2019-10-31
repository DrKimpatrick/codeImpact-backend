import express, { Request, Response } from 'express';
import SubscriberController from '../controllers/subscribers';

const router = express.Router();
/**
    Default route
 */
router.route('/').get((req: Request, res: Response) => {
    return res.json({
        status: 1,
        message: "Welcome to the codeImpact API",
    })
});

/**
    Subscribe end-point
    @param {
        email
    }
 */
router.route('/subscribe').post(SubscriberController.saveSubscriber);

export default router;