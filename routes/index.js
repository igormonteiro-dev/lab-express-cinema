const { Router } = require("express");
const router = new Router();
(mongoose = require("mongoose")), (Movie = require("../models/movie.model"));

//Todo Get the list of movies, then select()
router.get("./movies", async (req, res, next) => {
  try {
    const movies = await Movie.find().select({ title: 1, director: 1, _id: 0 });

    // dont need status 200
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

//Todo Get all details about each movie
router.get("./movie/:id", async (req, res, next) => {
  try {
    const movieById = await Movie.findById(req.params.id, { __v: 0 });

    res.json(movieById);
  } catch (error) {
    next(error);
  }
});

//This is a health check. It allows us to see that the API is running.

router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-express-cinema" })
);

module.exports = router;
