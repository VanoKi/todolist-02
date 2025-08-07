import {TodolistType} from "../App.tsx";

const initialState:TodolistType[] = []
export const todolistReducer = (state:TodolistType[] = initialState, action:Actions) => {
  switch (action.type) {
    case 'delete_todolist': {
      return state.filter(tl => tl.id !== action.payload.id)
    }
    default: return state
  }
}

export type DeleteTodolistAction = {
  type: 'delete_todolist',
  payload: {
    id: string
  },
}

type Actions = DeleteTodolistAction