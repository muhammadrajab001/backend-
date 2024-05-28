import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


app.get("/getData", (req,res) => {
    res.send("    ssss")
})
app.listen(5000, () => console.log("AAA IS Running"))