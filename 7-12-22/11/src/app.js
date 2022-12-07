const express = require("express");
const fs = require("fs");

const loadMovies = () => {
  try {
    const dataBuffer = fs.readFileSync("movies.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const movies = loadMovies();

const saveMovies = (movies) => {
  const dataJSON = JSON.stringify(movies);
  fs.writeFileSync("movies.json", dataJSON);
};

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`)
);

// let movies = [
//   {
//     id: 1,
//     name: "Nils",
//     rate: "2",
//   },
//   {
//     id: 2,
//     name: "Booly",
//     rate: "4",
//   },
//   {
//     id: 3,
//     name: "Shaltiel",
//     rate: "5",
//   },
// ];

app.get("/movies", (request, response) => {
  response.json(movies);
});

app.get("/movies/:id", (request, response) => {
  const accountId = Number(request.params.id);
  const getMovie = movies.find((account) => account.id === accountId);

  if (!getMovie) {
    response.status(500).send("Movie not found.");
  } else {
    response.json(getMovie);
  }
});

app.post("/movies", (request, response) => {
  const incomingMovie = request.body;

  movies.push(incomingMovie);

  response.json(movies);
  saveMovies(movies);
});

app.put("/movies/:id", (request, response) => {
  const accountId = Number(request.params.id);
  const body = request.body;
  const account = movies.find((account) => account.id === accountId);
  const index = movies.indexOf(account);

  if (!account) {
    response.status(500).send("Movie not found.");
  } else {
    const updatedMovie = { ...account, ...body };

    movies[index] = updatedMovie;

    response.send(updatedMovie);
    saveMovies(movies);
  }
});

app.delete("/movies/:id", (request, response) => {
  const accountId = Number(request.params.id);
  const newMovies = movies.filter((account) => account.id != accountId);

  if (!newMovies) {
    response.status(500).send("Movie not found.");
  } else {
    movies = newMovies;
    response.send(movies);
    saveMovies(movies);
  }
});
