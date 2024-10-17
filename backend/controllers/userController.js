import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET); // Adding expiration
};

// Route For Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: 'An error occurred. Please try again.' });
    }
};

// Route for Register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        const token = createToken(newUser._id);
        return res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: 'An error occurred. Please try again.' });
    }
};

// Route for Admin Login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = createToken(process.env.ADMIN_EMAIL); // Better to use admin ID or similar
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: 'An error occurred. Please try again.' });
    }
};

export { loginUser, registerUser, adminLogin };
