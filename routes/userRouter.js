const express = require("express");
const userModel = require("../models/userModel");

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    try {
        const user = new userModel(req.body);

        await user.save();

        res.status(201).send({ status: "success", user });
    } catch (error) {
        res.status(501).send({ status: "error", error });
    }
})

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(201).send({ status: "error", error: "Invalid email" });
        }

        if (user.password !== password) {
            return res.status(201).send({ status: "error", error: "Invalid password" });
        }

        res.status(201).send({ status: "success", user });

    } catch (error) {
        res.status(401).send({ status: "error", error });
    }
});

module.exports = userRouter