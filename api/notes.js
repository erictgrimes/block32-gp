// TODO: this file :)
import express from "express";
const router = express.Router();

import { getNotes, getNoteById, addNote } from "../db/notes.js";

router
  .route("/")
  .get((req, res) => {
    const notes = getNotes();
    res.send(notes);
  })
  .post((req, res) => {
    if (!req.body) return res.status(400).send("Request must have a body.");

    const { text } = req.body;
    if (!text) return res.status(400).send("New note must have text.");

    const newNote = addNote(text);
    res.status(201).send({ text });
  });

router.route("/:id").get((req, res) => {
  const id = Number(req.params.id);
  const note = getNoteById(id);
  if (!note) return res.status(404).send(`No note with id ${id} found.`);
  res.send(note);
});

export default router;
