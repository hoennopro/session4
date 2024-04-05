const { createPost, displayAllPosts, searchPost } = require("./managerPost");

const newPost = {
  title: "Tiêu đề bài viết",
  content: "Nội dung bài viết",
  author: "Tác giả bài viết",
};

createPost(newPost);

displayAllPosts();

const searchResult = searchPost("Tiêu đề");
console.log("Kết quả tìm kiếm:", searchResult);
