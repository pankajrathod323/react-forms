import './Comment.css';

export function Comment({ comments }) {
  return (
    <div className="CommentContainer">
      <h3>All Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="Comment">
          <h4>
            {comment.username} (Rating: {comment.rating})
          </h4>
          <p>{comment.remark}</p>
        </div>
      ))}
    </div>
  );
}