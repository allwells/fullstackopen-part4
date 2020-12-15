const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});

  response.json(blogs);
});

blogRouter.get("/:id", (request, response, next) => {
  const id = request.params.id;

  Blog.findById(id)
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

blogRouter.delete("/:id", (request, response, next) => {
  const id = request.params.id;

  Blog.findByIdAndDelete(id)
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => next(error));
});

blogRouter.put("/:id", (request, response, next) => {
  const id = request.params.id;
  const body = request.body;

  const blogModel = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };

  Blog.findByIdAndUpdate(id, blogModel, { new: true })
    .then((blogs) => {
      response.json(blogs.toJSON());
    })
    .catch((error) => next(error));
});

blogRouter.post("/", (request, response, next) => {
  const body = request.body;

  if (
    body.title === undefined ||
    body.url === undefined ||
    body.author === undefined
  ) {
    return response.status(400).json({ error: "Content missing" });
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog
    .save()
    .then((saved) => saved.toJSON())
    .then((result) => response.status(201).json(result))
    .catch((error) => next(error));
});

module.exports = blogRouter;
