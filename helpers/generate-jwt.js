import jwt from 'jsonwebtoken';


export const generateJwt = async (uid) => {

    try {
        const token = await jwt.sign(
            { uid },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return token;
    } catch (error) {
        console.error(error);
        
    }

}