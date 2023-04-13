import { pool } from "./pool";

// function to save data to the database
export const saveToPosts = async (post: ChangedPost) => {
  try {
    await pool.query(
      "INSERT INTO changedPosts (userid, title, body, ischanged, contentlength) VALUES ($1, $2, $3, $4, $5)",
      [post.userId, post.title, post.body, post.changed, post.contentLength]
    );
  } catch (error) {
    console.error(error);
  }
};
