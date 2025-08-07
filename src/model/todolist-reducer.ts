import {TodolistType} from "../App.tsx";
import {v4} from "uuid";

const initialState:TodolistType[] = []
export const todolistReducer = (state:TodolistType[] = initialState, action:Actions) => {
  switch (action.type) {
    case 'delete_todolist': {
      return state.filter(tl => tl.id !== action.payload.id)
    }
    case 'create_todolist': {
      const newTodolist:TodolistType = {id: v4(), title: action.payload.title, filter: 'All'}
      return [newTodolist, ...state]
    }
    default: return state
  }
}



export const deleteTodolistAC = (id:string):DeleteTodolistAction => {
  return {type: "delete_todolist", payload: {id} as const}
}
export const createTodolistAC = (title:string):CreateTodolistAction => {
  return {type: "create_todolist", payload: {title} as const}
}
export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
type Actions = DeleteTodolistAction | CreateTodolistAction
