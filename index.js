const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");
const app = express();
const postRoutes = require("./routes/postsRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("<h2>Hi There!!!!</h2>"));
const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/post-app?authSource=admin`;

mongoose
  .connect(mongoUrl)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/auth", userRoutes);

app.listen(port, () => {
  console.log("listening on port " + port);
});
