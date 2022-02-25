import React, {useCallback} from 'react';
import Answer from '../Answer/index';
import "./CommentsAndAnswers.css";

type Comment = {
  comment: string,
  answer: string
}

type Comments = {
  comments: Array<Comment>
}

const CommentsAndAnswers = ({comments}:Comments) => { 
  return (      
    <div className="comments">
      {
        comments.map((comment:Comment, index: number) => (
          <div className="comment" key={index}>  
            {comment.comment}
            <Answer answer={comment.answer}/>
          </div>
        ))
      }
    </div>
  )
}

export default CommentsAndAnswers