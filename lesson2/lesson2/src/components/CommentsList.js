import { useState } from "react";
import "./CommentsList.css";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    function clickHandler(event) {
        setComments(comments.filter((el) => event.target.getAttribute("id") != el.id));
    }

    return comments.map((comment) =>
        <div key={comment.id} className="CommentsList">
            <div>{comment.text}</div>
            <button id={comment.id} onClick={clickHandler}>Удалить</button>
        </div>
    );
}

export default CommentsList;