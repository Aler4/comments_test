import {User} from "../types";

export const createId = (users: User[]) => {
    let id = Math.round(Math.random() * 1000000000);
    if (users.some(el => el.id === id)) {
        createId(users);
    }
    return id;
}
