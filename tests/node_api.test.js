const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Blog = require("../models/blog");
const api = supertest(app);

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
    title: "Gihub Latest",
    author: "emediong",
    url: "https://github.com/emedion",
    likes: 113,
    id: "5fd294a77bd47c33f7e728f8",
  },
  {
    title: "Fullstack Open",
    author: "helsinki",
    url: "https://fullstackopen.com/en",
    likes: 22414,
    id: "5fd294e67bd47c33f7e728f9",
  },
  {
    title: "The Blog List",
    author: "Daily Bugle",
    url: "https://newyorktimes.com/",
    likes: 623233,
    id: "5fd2a1251f397c3b78d590cb",
  },
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let BlogObject = new Blog(InitialBlogs[0]);
  await BlogObject.save();
  BlogObject = new Blog(InitialBlogs[1]);
  await BlogObject.save();
  BlogObject = new Blog(InitialBlogs[2]);
  await BlogObject.save();
  BlogObject = new Blog(InitialBlogs[3]);
  await BlogObject.save();
  BlogObject = new Blog(InitialBlogs[4]);
  await BlogObject.save();
});

test("Blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("There are five blogs", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(InitialBlogs.length);
});

test("The first blog is about Github", async () => {
  const response = await api.get("/api/blogs");

  const contents = response.body.map((res) => res.title);
  expect(contents).toContain("Github");
});

afterAll(() => {
  mongoose.connection.close();
});
