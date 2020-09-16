const express = require("express");

// Assign environment variables
const port = 4000;
/**
 * Setup services
 */

// Initiliase an express server
const app = express();

// Options to pass to mongodb to avoid deprecation warnings

// Setup routes to respond to client
app.get("/welcome", async (req, res) => {
  console.log("Client request received");
  res.send(
    'Hello Client!'
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));
