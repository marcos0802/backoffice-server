import db from "../config/db.js";

export const getProjects = async (req, res) => {
  const sql = "SELECT * FROM cms_projects ORDER BY id DESC";

  await db.query(sql, (err, results) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(results);
  });
};

export const getProject = async (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM cms_projects WHERE id=? LIMIT 1";

  await db.query(sql, id, (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(result);
  });
};

export const createProject = async (req, res) => {
  const project = req.body;
  const sql = "INSERT INTO cms_projects SET ?";

  await db.query(sql, project, (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(201).json(result);
  });
};

export const deleteProject = async (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM cms_projects WHERE id=?";

  await db.query(sql, id, (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(result);
  });
};

export const updateProject = async (req, res) => {
  const id = req.params.id;
  const updatedProject = req.body;
  const sql = "UPDATE cms_projects SET ? WHERE id=?";

  await db.query(sql, [updatedProject, id], (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(result);
  });
};
