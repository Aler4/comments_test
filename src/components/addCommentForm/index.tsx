import {FC, useEffect, useState} from 'react';
import './style.scss';
import {useDispatch} from "react-redux";
import {addComment} from "../../redux/actions";
import {User} from "../../types";

type TProps = {
    user: User,
}

export const AddCommentForm: FC<TProps> = ({user}) => {
    let [comment, setComment] = useState({color: 'black', text: ''});
    let dispatch = useDispatch();

    let addCommentHandler = (e: any) => {
        if(comment.text.length > 0 && user.comments) {
            e.preventDefault();
            // @ts-ignore
            dispatch(addComment(comment));
            setComment({color: 'black', text: ''});
        }
        else if (comment.text.length > 0 && !(user.comments)){
            e.preventDefault();
        }
    }

    return (

            <form className="add-comment-form">
                <input onChange={(e) => setComment({...comment, color: e.target.value})} type="color" className="add-comment-form__clr" />
                <textarea value={comment.text} onChange={(e) => setComment({...comment, text: e.target.value})} className="add-comment-form__txt" placeholder='Type comment here' required/>
                <input onClick={addCommentHandler} type="submit" className="add-comment-form__subm btn" value='Add new'/>
            </form>

    )
}
