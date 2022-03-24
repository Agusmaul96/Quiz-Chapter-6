const { books } = require("./models");
books.query("UPDATE  Books  SET  price = 180000  WHERE   author = 'Simon Sinek'", (books) => {
  console.log(books);
});
