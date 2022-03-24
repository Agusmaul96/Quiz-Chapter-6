const { books } = require("./models");
books
  .destroy({
    where: {
      id: 2,
    },
  })
  .then(() => console.log("data 1 di hapus"));
