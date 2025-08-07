import {TodolistType} from "../App.tsx";

const initialState:TodolistType[] = []
export const todolistReducer = (state:TodolistType[] = initialState, action:Aсtions) => {
  switch (action.type) {
    case 'delete_todolist': {
      return state.filter(tl => tl.id !== action.payload.todolistId)
    }
    default: return state
  }
}

type Aсtions = {
  type: string
  payload: any
}

