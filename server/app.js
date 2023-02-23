const express = require("express");
const app = express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const usersRouter = require("./routes/UsersRouter");
const postRouter = require("./routes/PostRouter");
const commentsRouter = require("./routes/CommentsRouter");
const likesRouter = require("./routes/LikesRouter");

app.use("/auth", usersRouter);
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);
app.use("/likes",likesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});