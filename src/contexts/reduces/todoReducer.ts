import { TodoActions, TodoState } from "../../@types/TodoReducer";

export const initialState: TodoState = [];

export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {
    switch (action.type){
        case 'ADD':
            // eslint-disable-next-line no-case-declarations
            const {payload} = action

            return !Array.isArray(payload) ? [...state, payload]: payload

        case 'CHANGE':
            // eslint-disable-next-line no-case-declarations
            const ChangedTodos = state.map((item, key) => {
                if (key == action.payload.index){
                    item.title = action.payload.title ?? item.title
                    item.isDone = action.payload.isDone ?? item.isDone
                }

                return item
            })

            return ChangedTodos

        case 'DELETE':
            return state.filter((_item, key) => key != action.payload.index)

        default:
            return state
    }
}