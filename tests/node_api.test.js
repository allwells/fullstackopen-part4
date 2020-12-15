const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("Notes are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("There are five blogs", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(4);
});

test("The first blog is about Github", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body[1].title).toBe("Github");
});

afterAll(() => {
  mongoose.connection.close();
});
