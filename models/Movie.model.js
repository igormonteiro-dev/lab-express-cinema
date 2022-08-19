const { Schema, model } = require("mongoose");

//Todo Declare the schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  showtimes: {
    type: [String],
    required: true,
  },
});

//Todo Declare the model

const Movie = model("Movie", movieSchema);

module.exports = Movie;
