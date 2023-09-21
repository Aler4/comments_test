import {FC, MouseEventHandler} from 'react';
import './style.scss';
import {User} from "../../types";

type TProsp = {
    user: any,
    isActive: boolean,
    chooseActive: (user: User) => void,
    remove: (user: User) => void,
}

export const UserItem: FC<TProsp> = ({user,isActive,chooseActive,remove}) => {


   let delItem = (e: any) => {
       e.stopPropagation();
        return remove(user);

   };


    return (
        <li onClick={() => chooseActive(user)} className='user-item' style={{borderLeft: isActive ? '4px solid deeppink' : ''}}>
            <span className="user-item__name">
                {user.name}
            </span>
            <div className="user-item_actions">
                <span className="actions__badge">
                    {user.comments.length}
                </span>
                <button onClick={delItem} className='actions__delete-btn btn'>
                    Delete
                </button>
            </div>
        </li>
    )
}
