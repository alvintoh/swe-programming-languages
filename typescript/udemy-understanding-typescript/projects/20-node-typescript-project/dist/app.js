import express from "express";
const app = express();
app.get("/", (req, res) => {
    console.log("req.method");
    res.json({
        message: "Hello Word!",
    });
});
app.listen(3000);
