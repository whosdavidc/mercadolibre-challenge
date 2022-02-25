import React, { ButtonHTMLAttributes, useRef, useState, useCallback} from 'react';
import "./CommentSection.css";
import CommentsAndAnswers from "../CommentsAndAnswers/index";

type FormElement = React.FormEvent<HTMLFormElement>;

type Comment = {
  comment: string,
  answer: string
}


const CommentSection = () => {
  const [newComment, setNewComment] = useState<Comment>({comment: "", answer: ""});
  const [comments, setComments] = useState<Array<Comment>>([]);
  const commentInput = useRef<HTMLInputElement>(null);
  const answers = ["No puedo estoy ocupado", "Acabamos de cerrar", "Escriba más fuerte que tengo una toalla", "No tengo idea, no soy de acá maestro"];

  const handleSubmit = useCallback(
    (event: FormElement) => {
      event.preventDefault();
      addComment(newComment);
      setNewComment({comment: "", answer: ""});
      commentInput.current?.focus();
    }, [newComment]
  )

  const addComment = useCallback(
    (comment: Comment) => {
      const newComments: Array<Comment> = [...comments, comment]
      setComments(newComments)
    },
    [comments]
  ) 

  const getRandomNumber = () =>{
    return Math.floor(Math.random() * answers.length);
  }

  const getRandomAnswer = () =>{
    const random = getRandomNumber();
    return answers[random];
  }

  const isDisabled = !newComment.comment ? true : false;


  return (
    <div className='comment-section'>
      <h2 className='comment-title'>Preguntas y respuestas</h2>
      <p className='comment-sub-title'><b>Preguntale al vendedor</b></p>
      <div className='comment-box'>
        <form className="comment-form" onSubmit={handleSubmit}>
          <input className='input-comment' placeholder="Escribí tu pregunta..."
            type="text"
            onChange={event => setNewComment({comment:event.target.value, answer:getRandomAnswer()})}
            value={newComment.comment}
            ref={commentInput}
          >
          </input>
          <button className={`comment-button ${isDisabled && "comand-button-disabled"}`} disabled={isDisabled}>
            Preguntar
          </button>
        </form>
      </div>
    { comments.length !==0 &&  <CommentsAndAnswers comments={comments}/> }
    </div>
  )
}

export default CommentSection