import actionCreatorFactory, { } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const Actions = {
    updateName: actionCreator<string>('UPDATE_NAME'),
    updateDescription: actionCreator<string>('UPDATE_DESCRIPTION'),
    updateTodos: actionCreator<[]>('UPDATE_TODOS')
}