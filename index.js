import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./config/db.js";
import projectsRoutes from "./routes/projects.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {});
  }
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.redirect("/projects");
});

app.use("/projects", projectsRoutes);
