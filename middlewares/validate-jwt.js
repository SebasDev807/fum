import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'


export const validateJwt = async (req, res, next) => {

    const token = req.header('bearer-token');

    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(uid);

        if (!user || !user.status) {
            return res.status(404).json({
                message: `User with id ${uid} doesn't exists`
            });
        }

        req.user = user;

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Something went broke.'
        })

    }
}