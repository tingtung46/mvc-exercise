const express = require("express");
const path = require("node:path");
const app = express();

const assetsPath = path.join(__dirname, "public");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.listen(3000);
