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

app.get("/users", usersControllers.getusers);
app.post("/users", validatorUsers, runValidator, usersControllers.createusers);
app.put("/users", usersControllers.updateusers);
app.delete("/users", usersControllers.deleteusers);

app.get("/books", booksControllers.getbooks);
app.post("/books", validatorBooks, runValidatorbooks, booksControllers.createbooks);
app.put("/books", booksControllers.updatebooks);
app.delete("/books", booksControllers.deletebooks);

app.post("/transactions", ordersControllers.createOrders);
app.get("/transactions/users", usersControllers.getusersTrans);

app.listen(port, () => {
  console.log(`port yg berjalan ${port}`);
});
