import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '9776f825-db80-4051-9f58-6c0d39788ac9'
    },
})

export const todolistApi = {
    getTodolists() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodoType }>>('todo-lists', {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    },
}

type TodoType = {

    id: string
    title: string
    addedDate: string
    order: number
}


type ResponseType<T = {}> = {
    fieldsError: string[]
    resultCode: number
    messages: string[]
    data: T
}

// type CreateTodolistType = {
//     data: { item: TodoType }
//     fieldsError: string[]
//     resultCode: number
//     messages: string[]
// }

// type DeleteAndUpdateTodolistType = {
//     data: {}
//     fieldsError: string[]
//     resultCode: number
//     messages: string[]
// }


