import express from "express";
import notesRouter from "./api/notes.js"


const app = express();
export default app;

//body parsing middleware
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use("/notes", notesRouter);


// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});
