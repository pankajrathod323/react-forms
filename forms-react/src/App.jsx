import { useState } from 'react';
// import './App.css';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

function App() {
  const [comments, setComments] = useState([
    {
      username: 'pankaj',
      remark: 'great job!',
      rating: 4,
    },
  ]);

  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <>
      <CommentForm addComment={addComment} />
      <Comment comments={comments} />
    </>
  );
}

export default App;
