console.log("Hallo Kai!");

//this gives access to express.js
const express = require("express");
const app = express();

//this listens to a port and gives out a callback function
app.listen(3000, () => console.log("--Hi, I'm listening at port 3000--"));
//this serves as static file from the folder "public"
app.use(express.static("public"));
//this enables the server to read the request as JSON
app.use(express.json({ limit: "1mb" }));
//this is for receiving data
app.post("/api", (request, response) => {
  console.log("I got a request incoming!");
  console.log(request.body);
  //sends back a JSON object with the received data (lol)
  response.json({
    status: "success",
    latitude: request.body.latitude,
    longitude: request.body.longitude,
  });
});
