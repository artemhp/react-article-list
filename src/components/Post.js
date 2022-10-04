import "./Post.css";
function Post(props) {
  return (
    <article className="article">
      <div className="author-info">
        <img className="avatar" alt="" src={props.img} />
        <div>{props.name}</div>
        <div>{props.date}</div>
      </div>
      <div className="content">{props.text}</div>
      <div>
        <textarea />
      </div>
    </article>
  );
}

export default Post;
