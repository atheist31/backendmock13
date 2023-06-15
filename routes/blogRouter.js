const express = require("express");
const blogModel = require("../models/blogModel");
const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
    const { title, page, limit = 5, category, date, sort } = req.query;
    const query = {};
    if (title) {
        query.title = title;
    } else if (category) {
        query.category = category;
    } else if (date) {
        query.date = date;
    }

    const skip = (page - 1) * limit;

    try {
        const blogs = await blogModel.find(query).skip(skip).limit(limit).sort(sort === "asc" ? { _id: 1 } : { _id: -1 });
        res.status(200).json({ status: "success", blogs })
    } catch (error) {
        res.status(400).json({ status: "failed", error })
    }
})

blogRouter.post("/", async (req, res) => {
    try {
        const blog = await blogModel.create(req.body);
        res.status(200).json({ status: "success", blog })
    }
    catch (error) {
        res.status(400).json({ status: "failed", error })
    }
})

blogRouter.delete("/:id", async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: "success", blog })
    }
    catch (error) {
        res.status(400).json({ status: "failed", error })
    }
})

module.exports = blogRouter;