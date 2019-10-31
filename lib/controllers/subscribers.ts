import { Response, Request } from 'express';
import SubscriberModel from '../models/sunscriber';

class Subscribers {
    public saveSubscriber  = (req: Request, res: Response) => {
        const newObj = new SubscriberModel({ ...req.body });

        newObj.save((err: any) => {
            if (err) {
                return res.json({
                    status: -1,
                    error: "Something wrong happened duing the request"
                })
            };

            return res.json({
                status: 1,
                message: "Successfully subscribed to the codeIpact newsletter"
            });
        });
    }

}

export default new Subscribers()