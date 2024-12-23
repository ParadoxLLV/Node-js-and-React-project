import express from 'express';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    res.send("hello world! 2");
})

app.listen(5000, () => {
    console.log("listening on port 5000");
});
