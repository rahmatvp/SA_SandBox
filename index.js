const express = require("express");
const app = express();
const port = 3000;

const { sequelize } = require("./models");
const usersControllers = require("./controllers/users");
const booksControllers = require("./controllers/books");
const ordersControllers = require("./controllers/orders");
const {
  runValidator,
  validatorUsers,
} = require("./controllers/users/validation");

const {
  runValidatorbooks,
  validatorBooks,
} = require("./controllers/books/validation");

sequelize.sync();
app.use(express.json());

app.get("/", usersControllers.getusers);
app.post("/", validatorUsers, runValidator, usersControllers.createusers);
app.put("/", usersControllers.updateusers);
app.delete("/", usersControllers.deleteusers);

app.get("/books", booksControllers.getbooks);
app.post("/books", validatorBooks, runValidatorbooks, booksControllers.createbooks);
app.put("/books", booksControllers.updatebooks);
app.delete("/books", booksControllers.deletebooks);

//app.post("/transactions", ordersControllers.createOrders);
app.get("/transactions", ordersControllers.getOrders);

app.listen(port, () => {
  console.log(`port yg berjalan ${port}`);
});
