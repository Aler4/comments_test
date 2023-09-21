import {TState, User} from "../types";

const initialState: TState = {
    users: [],
    activeUser: {name: '' , id: '', comments: []},
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: state.users.concat(action.data),
            }
        case 'REMOVE_USER':
            console.log(state)
            return {
                ...state,
                users: state.users.length > 0 ? state.users.filter(el => el.id !== action.data.id) : [],
                activeUser: action.data.id === (state.activeUser as User).id  ? state.users[state.users.length - 1] : state.activeUser,
            }
            case 'REMOVE_ALL':
            return {
                ...state,
                users:  [],
                activeUser: {name: '' , id: '', comments: []},
            }
        case 'CHOOSE_ACTIVE':
            return {
                ...state,
                activeUser: state.users.filter(el => el.id === action.data.id)[0],
            }
            case 'ADD_COMMENT':
                console.log(state)
            return {
                activeUser: {...state.activeUser, comments: (state.activeUser as User).comments.concat(action.data)},
                users: state.users.map((el) => {
                    if(el.id === (state.activeUser as User).id) {
                        el.comments = el.comments.concat(action.data);
                    }
                    return el;
                })
            }
        default: return state;
    }
}
