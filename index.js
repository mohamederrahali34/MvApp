const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT | 5000;
const mvRouter = require("./routes/mvRoutes");
const cors = require("cors");

app.use(
	cors({
		origin: "*",
	})
);

app.use("/", mvRouter);

app.use(express.static("./dist"));
app.get("/*", (req, res) => {
	res.sendFile("index.html", { root: "dist/" });
});
mongoose
	.connect("mongodb+srv://chatbot:chatbot@cluster0.h1gpe.mongodb.net/Exam", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	.catch((err) => console.log(err));

app.listen(PORT, () => {
	console.log("app running on port " + PORT);
});
