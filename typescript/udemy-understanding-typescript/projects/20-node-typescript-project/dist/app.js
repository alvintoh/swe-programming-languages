import express, {} from "express";
import todoRoutes from "./routes/todo.ts";
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(todoRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error occurred!" });
});
app.listen(3000);
