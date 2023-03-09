const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/auth.route");

dotenv.config();
const port = process.env.PORT;
//middleware
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

/* A middleware that parses the incoming request body and makes it available as req.body. */
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

/* A middleware that sets HTTP headers to help protect the app from some well-known web
vulnerabilities. */
app.use(helmet());

/* A middleware that logs the HTTP requests. */
app.use(morgan("common"));

/* Routes*/
app.use("/api/auth", authRouter);

//test connection
mongoose.set("strictQuery", false);
/* Connecting to the MongoDB database. */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((e) => console.log("error:", e));

/* Listening to the port. */
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
