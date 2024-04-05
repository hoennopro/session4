let listPost = [];

const MAXPOST = 5;

const post = {
  title: "",
  content: "",
  author: "",
};

function createPost(newPost) {
  if (listPost.length >= MAXPOST) {
    console.log("Danh sách bài viết đã đầy.");
  } else {
    listPost = [...listPost, newPost];
    console.log("Bài viết đã được thêm vào danh sách.");
  }
}

function displayAllPosts() {
  console.log("Danh sách bài viết:");
  for (const post of listPost) {
    console.log("Tiêu đề:", post.title);
    console.log("Nội dung:", post.content);
    console.log("Tác giả:", post.author);
  }
}

function searchPost(keyword) {
  const result = listPost.filter(
    (post) =>
      post.title.includes(keyword) ||
      post.content.includes(keyword) ||
      post.author.includes(keyword)
  );
  return result;
}

module.exports = { createPost, displayAllPosts, searchPost };
