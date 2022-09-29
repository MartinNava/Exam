const express = require("express");
const path = require("path");
const consoleRoutes = require("./routes/console");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/examen", consoleRoutes);

app.listen(8083, () => {
    console.log("Servidor en línea");
})