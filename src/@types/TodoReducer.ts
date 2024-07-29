import { Todo } from "./Todo";

export type TodoState = Todo[]

type TodoWithOptionalProps = {
    [key in keyof Todo]?: Todo[key]
}

// Adicionar
type AddTodo = {
    type: 'ADD',
    payload: Todo | Todo[]
}

// Mudar
type ChangedTodos = {
    type: 'CHANGE',
    payload: TodoWithOptionalProps & {index: number}
}

// Deletar
type DeleteTodo = {
    type: 'DELETE',
    payload: {index: number}
}

export type TodoActions = AddTodo | ChangedTodos | DeleteTodo
