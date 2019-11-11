import { Response, Request } from 'express';
import RegisterModel from '../models/register';

class Register {
    public registerUser  = (req: Request, res: Response) => {
        const newObj = new RegisterModel({ ...req.body });

        newObj.save((err: any) => {
            if (err) {
                console.log(err, '----error--');
                return res.json({
                    status: -1,
                    error: "Something wrong happened duing the request"
                })
            };

            return res.json({
                status: 1,
                message: "Successfully registered for the codeIMpact classes"
            });
        });
    }

}

export default new Register()