import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API TODOLISTS',
}


export const GetTodolists = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistApi.getTodolists()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistApi.createTodolist('react')
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '99268644-c301-475b-bfbc-68f717cae009';

        todolistApi.deleteTodolist(todolistId)
        .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todolistId = '5ba429ce-7272-47fd-9fa2-de38c849e60e'

        todolistApi.updateTodolist(todolistId, "react")
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
