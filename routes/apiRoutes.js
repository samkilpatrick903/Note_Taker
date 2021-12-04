const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const noteData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => res.json(noteData));

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  noteData.push(req.body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteData)
  );
  return res.status(200).json(noteData);
});

router.delete("/api/notes/:id", (req, res) => {
  const deletedId = req.params.id;

  noteData = noteData.filter((note) => {
    if (deletedId === note.id) {
      return false;
    } else {
      return true;
    }
  });
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteData)
  );
  return res.status(200).json(noteData);
});

module.exports = router;
