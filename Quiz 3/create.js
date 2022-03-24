const { books } = require("./models");
books
  .create({
    name: ("Rich Dad Poor Dad"),
    author: ("Robert T. Kiyosaki"),
    price: ( "54400"),
    is_publish: ("FALSE"),
  })
  .then((books) => {
    console.log(books);
  });
