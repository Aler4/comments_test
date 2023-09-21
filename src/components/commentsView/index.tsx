import {FC, useEffect, useState} from 'react';
import './style.scss';
import { AddCommentForm, CommentItem } from '../';
import {Comment, User} from "../../types";
import {useSelector} from "react-redux";
import {activeUserSelector, usersSelector} from "../../redux/selectors";


export const CommentsView: FC  = () => {
    let users = useSelector(usersSelector);
    let actUser = useSelector(activeUserSelector);

    return (

        <div className='comments-view'>
            <h1 className="comments-title title">
                Comments # {users.length > 0 ?(actUser as User).id : ''}
            </h1>
            <ul className='comments-list'>
                {((actUser as User).comments && users.length > 0) ? (actUser as User).comments.map((el: Comment,i: number) => <CommentItem key={i} color={el.color} text={el.text} />): null}
            </ul>
            <AddCommentForm user={(actUser as User)}></AddCommentForm>
        </div>
    )
}
