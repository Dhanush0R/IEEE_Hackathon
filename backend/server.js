import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import adminRoutes from "./routes/admin.routes.js"
import assetRoutes from "./routes/asset.routes.js";


const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));

app.use("/api/admin", adminRoutes);
app.use("/api/asset", assetRoutes);
app.get("/", (req, res) => {
    res.send("Welcome");
})

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => console.log('listening on port ' + port));