const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  const total_likes = blogs.map((blog) => blog.likes).reduce(reducer, 0);
  return blogs.length === 0 ? 0 : total_likes;
};

const favoriteBlog = (blogs) => {
  const likes = blogs.map((blog) => blog.likes);
  const { _id, url, __v, ...favorite } = blogs[
    likes.indexOf(Math.max(...likes))
  ];

  return favorite;
};

const mostBlogs = (blogs) => {
  const objects = Object.entries(
    blogs.reduce((acc, curr) => {
      acc[curr.author] = (acc[curr.author] || 0) + 1;
      return acc;
    }, {})
  ).map(([author, blogs]) => ({ author, blogs }));
  return objects.find(
    (blog) => blog.blogs === Math.max(...objects.map((object) => object.blogs))
  );
};

const mostLikes = (blogs) => {
  const objects = Object.entries(
    blogs.reduce((acc, curr) => {
      acc[curr.author] = (acc[curr.author] || 0) + (curr.likes || 0);
      return acc;
    }, {})
  ).map(([author, likes]) => ({ author, likes }));
  return objects.find(
    (blog) => blog.likes === Math.max(...objects.map((blog) => blog.likes))
  );
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
