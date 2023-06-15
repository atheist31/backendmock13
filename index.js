const express = require("express");
const cors = require('cors');
const connectDB = require("./db/db");
const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRouter);
app.use('/api/blogs', blogRouter);

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

const port = process.env.PORT || 8080;

app.listen(port, connectDB(), () => console.log(`Server running on port ${port} 🔥`));