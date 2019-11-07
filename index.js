const express = require("express");
const cookbookRouter = require("./cookbook/cookbookRouter");

const server = express();

server.use(express.json());
server.use("/api", cookbookRouter);

server.get("*", (req, res) => {
  res.status(200).json("API up and running");
});

server.listen(process.env.PORT || 4000, () => {
  console.log("Server listening on: " + (process.env.PORT || 4000));
});
