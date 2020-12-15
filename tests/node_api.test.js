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

test("There are two blogs", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(2);
});

test("The first blog is about HTTP methods", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body[0].content).toBe("HTML is easy");
});

afterAll(() => {
  mongoose.connection.close();
});
