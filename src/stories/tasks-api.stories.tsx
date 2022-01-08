import React, {useEffect, useState} from 'react'
import {tasksApi} from "../api/task-api";

export default {
    title: 'API TASKS',
}


export const GetTasks = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = "4d0a95f0-aa03-4a45-9fc1-b7d0dfb29e9b"
        const pageSize = 5
        tasksApi.getTasks(todolistId, pageSize)
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = "08f62ecf-eab3-44d0-b2bd-e71c08342580"
        const title = 'CSS'
        tasksApi.createTask(todolistId, title)
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = "4d0a95f0-aa03-4a45-9fc1-b7d0dfb29e9b"
        const taskId = '336d7d03-be8e-4603-a31a-85c865cff1b7'
        tasksApi.deleteTask(todolistId, taskId)
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = "4d0a95f0-aa03-4a45-9fc1-b7d0dfb29e9b"
        const taskId = '1a771ddf-1b59-4164-b3ad-6c8c8e944621'
        const data = {
            title: 'new JS',
            description: null,
            status: 0,
            priority:1,
            startDate: null,
            deadline: null,
        }
        tasksApi.updateTask(todolistId, taskId, data)
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}