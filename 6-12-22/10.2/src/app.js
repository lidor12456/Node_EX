// const express = require('express')

// const app = express()

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })
// app.get('/raw-html', (req, res) => {
//     res.send('<h1>Welcome</h1>')
// })

// app.get('/users', (req, res) => {
//     res.send([{
//         name: 'Andrew'
//     }, {
//         name: 'Sarah'
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

// const http = require("http");
// const fs = require("fs");

// //Third-Party Modules
// const httpStatus = require("http-status-codes");

// const getViewUrl = (url) => {
//   return `views${url}.html`;
// };

// server = http.createServer((request, response) => {
//   let viewUrl = getViewUrl(request.url);
//   fs.readFile(viewUrl, (error, data) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(httpStatus.StatusCodes.NOT_FOUND);
//       response.write("<h1>File Not Found</h1>");
//     } else {
//       response.writeHead(httpStatus.StatusCodes.OK, {
//         "Content-Type": "index/html",
//       });
//       response.write(data);
//     }
//     response.end();
//   });
// });

// server.listen(3000);
// console.log(`The server is listening on port:3000`);

const port = 3000;

const http = require("http");
const fs = require("fs");

//Third-Party Modules
const httpStatus = require("http-status-codes");

const getViewUrl = (url) => {
  return `views${url}.html`;
};

server = http.createServer((request, response) => {
  let viewUrl = getViewUrl(request.url);
  fs.readFile(viewUrl, (error, data) => {
    if (error) {
      response.writeHead(httpStatus.StatusCodes.NOT_FOUND);
      response.write("<h1>File Not Found</h1>");
    } else {
      response.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html",
      });
      response.write(data);
    }
    response.end();
  });
});

server.listen(port);
console.log(`The server is listening on port: ${port}`);
