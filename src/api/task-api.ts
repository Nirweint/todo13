import axios from "axios";
import {ResponseType} from "../api/todolist-api";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '9776f825-db80-4051-9f58-6c0d39788ac9'
    },
})

export const tasksApi = {
    getTasks(todolistId: string, pageSize: number) {
        return instance.get<GetTaskType>(`todo-lists/${todolistId}/tasks?count=${pageSize}`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<ResponseType<{ item: TaskFromServerType }>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, payload: UpdateTaskPayloadType) {
        return instance.put<ResponseType<{ item: TaskFromServerType }>>(`todo-lists/${todolistId}/tasks/${taskId}`, payload)
    },
}

type TaskFromServerType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTaskType = {
    items: TaskFromServerType
    totalCount: number
    error: string | null
}

type UpdateTaskPayloadType = {
    title: string
    description: string | null
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
}