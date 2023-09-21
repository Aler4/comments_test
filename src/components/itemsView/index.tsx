import {FC} from 'react';
import { AddUserForm } from '../addUserForm';
import './style.scss';
import {UsersList} from "../usersList";

export const ItemsView: FC = () => {
    return (
        <div className="items-view">
            <h1 className='items-view__title title'>Items</h1>
            <AddUserForm/>
            <UsersList />
        </div>
    )
}
