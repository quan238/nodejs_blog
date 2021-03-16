const path = require("path");
// express là thư viện express ở package-json -> vào node_modules
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

// gọi function express
// trả về đối tượng -> app
const app = express();
// định nghĩa route
const port = 3000;

// thu vien morgan | http logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\view"));
// console.log('PATH: ',path.join(__dirname,'resources/view'))
// khi đi vào trang chủ return trình duyệt 1 cái chuỗi
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});
// 127.0.0.1 - localhost
// node index.js : khoi chay application
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
