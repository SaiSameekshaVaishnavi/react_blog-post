import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const EditPage = ({ posts, handleEdit}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  useEffect(() => {
    if (post) {
      setNewPostTitle(post.title);
      setNewPostBody(post.body);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(id, newPostTitle, newPostBody);
  };

  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      {post && (
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">NewTitle:</label>
          <input
            id="postTitle"
            type="text"
            required
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <label htmlFor="postBody">NewPost:</label>
          <textarea
            id="postBody"
            required
            value={newPostBody}
            onChange={(e) => setNewPostBody(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {!post && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPage;
