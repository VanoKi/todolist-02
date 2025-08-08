import {FilterValueType, TodolistType} from "../App.tsx";
import {v4} from "uuid";

const initialState:TodolistType[] = []
export const todolistReducer = (state:TodolistType[] = initialState, action:Actions) => {
  switch (action.type) {
    case 'delete_todolist': {
      return state.filter(tl => tl.id !== action.payload.id)
    }
    case 'create_todolist': {
      const {id, title} = action.payload
      const newTodolist:TodolistType = {id, title, filter: 'All'}
      return [newTodolist, ...state]
    }
    case 'change_todolist_title': {
      const {id, title} = action.payload
      return state.map(tl => tl.id === id ? {...tl, title} : tl)
    }
    case 'change_todolist_filter': {
      const {id, filter} = action.payload
      return state.map(tl => tl.id == id ? {...tl, filter} : tl)
    }
    default: return state
  }
}

export const deleteTodolistAC = (id:string) => {
  return {type: "delete_todolist", payload: {id}} as const
}
export const createTodolistAC = (title:string) => {
  return {type: "create_todolist", payload: {title, id: v4()}} as const
}
export const changeTodolistTitleAC = ({ id, title }: { id: string; title: string }) => {
  return {type: 'change_todolist_title', payload: {id, title}} as const
}
export const changeTodolistFilterAC = ({id, filter}:{id:string, filter:FilterValueType}) => {
  return {type: 'change_todolist_filter', payload: {id, filter}} as const
}
export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type ChangeTodolistTitleAction = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterAction = ReturnType<typeof changeTodolistFilterAC>

type Actions = DeleteTodolistAction | CreateTodolistAction | ChangeTodolistTitleAction | ChangeTodolistFilterAction
