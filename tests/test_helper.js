const Blog = require("../controllers/blogs");

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
  {
    title: "Github Latest",
    author: "emediong",
    url: "https://github.com/emedion",
    likes: 113,
    id: "5fd294a77bd47c33f7e728f8",
  },
  {
    title: "Fullstack Open",
    author: "helsinki",
    url: "https://fullstackopen.com/en",
    likes: 414,
    id: "5fd294e67bd47c33f7e728f9",
  },
  {
    title: "The Blog List",
    author: "Daily Bugle",
    url: "https://newyorktimes.com/",
    likes: 231,
    id: "5fd2a1251f397c3b78d590cb",
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
  const blogs = await Blog.find();
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  InitialBlogs,
  NonExistingId,
  BlogsInDatabase,
};
