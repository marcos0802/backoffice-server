import express from "express";

import {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} from "../controllers/projects.js";

const router = express.Router();

router.get("/api", getProjects);
router.post("/:id", createProject);
router.get("/:id", getProject);
router.delete("/:id", deleteProject);
router.patch("/:id", updateProject);

export default router;
