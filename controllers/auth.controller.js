import { request } from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../helpers/generate-token.js';
import { generateJwt } from '../helpers/generate-jwt.js';


export const createUser = async (req = request, res = response) => {

    try {
        const { password, role, email, token, ...rest } = req.body;

        const existUser = await User.findOne({ email });

        //TODO: Mover a un validador personalizado 
        //Pista: rutas, helpers, los custom validators retornan true.
        if (existUser) {

            if (existUser.confirmed) {

                return res.status(400).json({
                    message: `User with email ${email} already exists`
                });

            } else {

                return res.status(400).json({
                    message: 'Please, check your email and confirm your account.'
                });
            }
        }

        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        const user = await User.create({
            password: hashedPassword,
            email,
            token: generateToken(),
            ...rest
        });


        res.status(201).json({
            user
        });
    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Something went broke.'
        });

    }
}


export const login = async (req = request, res = response) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !user.status) {
            return res.status(404).json({
                message: `Account with email ${email} doesn´t exists`
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        const jwt = generateJwt(user._id);

        return res.status(200).json({ user, jwt });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Something went broke.'
        })
    }
}

export const confirmUser = async (req = request, res = response) => {

    try {

        const { token } = req.params;
        const user = await User.findOne({ token });

        if (!user) {
            return res.status(404).json({
                message: 'Token is invalid or has expired.'
            });
        }

        user.token = null;
        user.confirmed = true;
        user.status = true;

        await user.save();

        res.status(200).json({
            message: 'Account confirmed'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Something went broke.'
        });

    }

}

