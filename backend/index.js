// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
import connectBD from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
const port = process.env.PORT || 5000;

// Connect to the database
connectBD();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));