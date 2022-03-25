const express = require("express");
const app = express();
const port = 8080;

const { books } = require("./models");
app.get("/", (_, res) => {
  books
    .findOne({
      where: {
        author: "Simon Sinek",
      },
    })
    .then((books) => res.send(books));
});
app.listen(port, () => {
  console.log(`Running http://localhost:${port}`);
});
