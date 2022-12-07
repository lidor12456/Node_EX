const express = require("express");
const api_helper = require("./API_helper");
const app = express();
const port = 4000;
const cors = require("cors");

/*
 * Route to DEMO the API call to a REST API Endpoint
 * REST URL : https://jsonplaceholder.typicode.com/todos/1
 */
app.get("/getAPIResponse", cors(), (req, res) => {
  api_helper
    .make_API_call(
      "http://api.weatherapi.com/v1/current.json?key=16e2a40f984944b4b67130808220712&q=London&aqi=no"
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
