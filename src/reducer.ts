import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Actions } from './action'

export interface Todo {
    name: string,
    description: string
}

export interface State {
    name: string,
    description: string,
    todos: Todo[]
}

const initialState: State = {
    name: '',
    description: '',
    todos: []
}

export const Reducers = reducerWithInitialState(initialState)
    .case(Actions.updateName, (state, name) => {
        return Object.assign({}, state, { name })
    })
    .case(Actions.updateDescription, (state, description) => {
        return Object.assign({}, state, { description })
    })
    .case(Actions.updateTodos, (state, todos) => {
        return Object.assign({}, state, { todos })
    })