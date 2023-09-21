import {FC} from 'react';
import './style.scss';

type TProps = {
    text: string,
    color: string,
}

export const CommentItem: FC<TProps> = ({text,color}) => {
    return (
        <li className='comment-item'>
            <div className="comment-item__avatar" style={{backgroundColor: color}}>
            </div>
            <div className='comment-item__text'>
                {text}
            </div>
        </li>
    )
}
