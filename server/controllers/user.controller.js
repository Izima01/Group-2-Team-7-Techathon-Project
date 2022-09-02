const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const registerUser = async (req, res, next) => {
    const { username, email, password, phoneNumber } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        next(new Error("Please fill all the required fields"));
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email });
    if(userExists) {
        res.status(400);
        next(new Error("This email is already registered"));
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        phoneNumber,
    });
    
    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            token: generateToken(newUser._id)
        })
    }

    else {
        res.status(400);
        next(new Error("Invalid credentials"));
    }
};

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    // Check if user email exists in the database
    if (user && await bcrypt.compare(password, user.password)) {
        
        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id)
        });
    }

    // Return an error if user validation fails
    else {
        res.status(400);
        next(new Error("Incorrect details"));
    }
};

const readUser = async (req, res, next) => {
    const { _id, username, email } = await User.findById(req.user.id);

    console.log(_id)
    console.log(username)
    console.log(email)

    // const { _id, name, email } = req.body;
    // const user = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        username,
        email
    });
};

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

const deleteUsers = async (req, res, next) => {
    const task = await User.deleteMany()
    try {
        res.status(200).json(task);
    } catch (error) {
        res.status(400);
        next(new Error("This task does not exist on our server."));
    }
}
module.exports = {
    registerUser,
    loginUser,
    readUser,
    getUsers,
    deleteUsers
};

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "3d" })
}