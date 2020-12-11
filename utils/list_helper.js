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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
