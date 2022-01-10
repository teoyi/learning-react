import bcrypt from 'bcryptjs'; // used to hash the passwords 
import jwt from 'jsonwebtoken'; // store user in browser for a period of time


import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body; 
    
    try {
        const existingUser = await User.findOne({ email }); //searching for existing user in the database

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials."});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmpassword } = req.body;
    
    try {
        const existingUser = await User.findOne({ email }); //try to find if email already exists 

        if(existingUser) return res.status(400).json({ message: "User already exist." });

        if(password !== confirmpassword) return res(400).json({ message: "Passwords don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);
        
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};