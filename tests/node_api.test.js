const mongoose = require("mongoose");
const supertest = require("supertest");
const helper = require("./test_helper");
const app = require("../app");
const Blog = require("../models/blog");
const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  let BlogObject = new Blog(helper.InitialBlogs[0]);
  await BlogObject.save();
  BlogObject = new Blog(helper.InitialBlogs[1]);
  await BlogObject.save();
});

test("A valid blog can be added", async () => {
  const NewBlog = {
    title: "async/await",
    author: "allwells",
    url: "https://fullstackopen.com/en/part4/testing_the_backend#async-await",
    likes: "200",
  };

  await api
    .post("/api/blogs")
    .send(NewBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const BlogsAtEnd = await helper.BlogsInDatabase();
  expect(BlogsAtEnd).toHaveLength(helper.InitialBlogs.length + 1);

  const contents = BlogsAtEnd.map((res) => res.title);
  expect(contents).toContain("async/await");
});

test("Blog without title is not added", async () => {
  const NewBlog = {
    author: "allwells",
    url: "https://fullstackopen.com/en/part4/testing_the_backend#async-await",
    likes: "400",
  };

  await api.post("/api/blogs").send(NewBlog).expect(400);

  const BlogsAtEnd = await helper.BlogsInDatabase();
  expect(BlogsAtEnd).toHaveLength(helper.InitialBlogs.length);
});

test("Blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("There are five blogs", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(helper.InitialBlogs.length);
});

test("The first blog is about Github", async () => {
  const response = await api.get("/api/blogs");

  const contents = response.body.map((res) => res.title);
  expect(contents).toContain("Github");
});

afterAll(() => {
  mongoose.connection.close();
});
