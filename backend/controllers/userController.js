import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { response } from "express"
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {

            return res.json({ success: false, message: "User Doesn't Exists" })

        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {

            const token = createToken(user._id)
            res.json({ success: true, token })
        }

        else {
            return res.json({ success: false, message: "Invalid Credentials" })


        }
    } catch (error) {

        console.log(error)
        res.json({ success: false, message: error.message })

    }


}

// Route for user registration
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        //checking user already exists
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User Already Exists" })
        }

        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter a Valid Email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter Strong Password" })
        }

        //hashing user password (will generate a salt from 5-15(more time will required to encrypt for the higher numbers))
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({ name, email, password: hashedPassword })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })



    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

// Route for admin login
const loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })


        }

    } catch (error) {

        console.log(error)
        res.json({ success: false, message: error.message })

    }



}

export { loginUser, registerUser, loginAdmin }