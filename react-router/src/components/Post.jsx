import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <div className="alert alert-success" role="alert">
          <p className="card-text postBody">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary tags">
              {tag}
            </span>
            
          ))}
          
        </div>
        <span className="badge text-bg-secondary bg-danger badges">
            {typeof post.reactions === "object" && post.reactions !== null
              ? `Likes: ${post.reactions.likes}, Dislikes: ${post.reactions.dislikes}`
              : post.reactions}
          </span>
      </div>
    </div>
  );
};

export default Post;
