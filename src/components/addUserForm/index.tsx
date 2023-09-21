import {FC, useState} from 'react';
import './style.scss';
import {User} from "../../types";
import {createId} from "../../helpers/createId";
import {usersSelector} from "../../redux/selectors";
import {useDispatch, useSelector} from "react-redux";
import {addUser, chooseActive} from "../../redux/actions";

export const AddUserForm: FC = () => {
    let users = useSelector(usersSelector);
    let [newUser, setNewUser] = useState<User>({id: createId(users), name: '', comments: []});
    let dispatch = useDispatch();

    const addHandler = (e: any) => {
        if (newUser.name.length > 0) {
            e.preventDefault();
            dispatch(addUser(newUser));
            setNewUser({id: createId(users), name: '', comments: []});
            if (users.length === 0) {
                dispatch(chooseActive(newUser));
            }
        }
    }

    return (
        <form className="add-item-form">
            <input value={newUser.name} onChange={(e) => setNewUser({id: newUser.id,name:e.target.value, comments: newUser.comments})} type="text" className="add-item-form__inp" placeholder='Type name here' required/>
            <input onClick={addHandler} type="submit" className="add-item-form__subm btn" value='Add item'/>
        </form>
    )
}
