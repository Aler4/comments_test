export type Comment = {
    color: string,
    text: string,
}

export type User = {
    id: number | string,
    name: string,
    comments: Comment[],
}

export type TState = {
    users: [] | User[],
    activeUser: {} | User,

}
