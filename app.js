const blogRouter = require("./controllers/blogs");
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

loggger.info("Connecting to", config.MONGODB_URI);

app.use("/api/blogs", blogRouter);
