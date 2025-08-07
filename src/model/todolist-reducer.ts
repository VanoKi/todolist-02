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



export const deleteTodolistAC = (id:string):DeleteTodolistAction => {
  return {type: "delete_todolist", payload: {id} as const}
}
export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
type Actions = DeleteTodolistAction
