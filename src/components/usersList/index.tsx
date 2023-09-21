import {FC, useCallback, useEffect, useState} from 'react';
import {UserItem} from "../userItem";
import {activeUserSelector, usersSelector} from "../../redux/selectors";
import {useDispatch, useSelector} from 'react-redux';
import './style.scss';
import {User} from "../../types";
import {chooseActive, removeUser} from "../../redux/actions";
import {useHandleHook} from "../../helpers/handleHook";


export const UsersList: FC = () => {
    let users = useSelector(usersSelector);
    let activeUser = useSelector(activeUserSelector);
    const dispatch = useDispatch();

    let handleActive = useHandleHook(null, dispatch, chooseActive);
    let handleDelete = useHandleHook(null, dispatch, removeUser);




    return (
        <ul className="user-list">
            {
             users.length > 0 ? users.map(el => <UserItem key={el.id} user={el} isActive={(activeUser as User).id === el.id} chooseActive={handleActive} remove={handleDelete} />) : null
            }
        </ul>
    )
}
