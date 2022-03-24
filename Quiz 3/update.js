const { books } = require("./models");
books.update(
  {
    price: "180000",
  },
  {
    where: {
      author: "Simon Sinek",
    },
  }
);
