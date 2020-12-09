const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");
const app = require("./app");

const server = http.createServer(app);

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const mongoUrl = "mongodb://localhost/bloglist";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
