const Blog = require("../models/blog");

const InitialBlogs = [
  {
    title: "Github",
    author: "allwells",
    url: "https://github.com/allwells",
    likes: 167,
    id: "5fd24de5f25b98293b3a806e",
  },
  {
    title: "Github Main",
    author: "tekipeps",
    url: "https://github.com/tekipeps",
    likes: 425,
    id: "5fd24e46f25b98293b3a806f",
  },
];

const NonExistingId = async () => {
  const blog = new Blog({
    title: "willremovethissoon",
    author: "allie",
    url: "https://github.com/allwells",
    likes: "213",
  });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const BlogsInDatabase = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  InitialBlogs,
  NonExistingId,
  BlogsInDatabase,
};
