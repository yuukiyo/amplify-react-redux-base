import { connect } from "react-redux";
import { AppState } from './store';
import { TodoComponent } from "./todoComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";

export interface todoHundler {
    hundleNameUpdate(s: string): void
    hundleDescriptionUpdate(s: string): void
    hundleTodoUpdate(): void
    hundleTodoSend(): void
}

const hundleNameUpdate = (name: string) => async(dispatch: Dispatch) => {
    dispatch(Actions.updateName(name))
}

const hundleDescriptionUpdate = (description: string) => async(dispatch: Dispatch) => {
    dispatch(Actions.updateDescription(description))
}

const hundleTodoUpdate = () => async() => {
    console.log("update")
}

const hundleTodoSend = () => async() => {
    console.log("send")
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        todo: appState.state.todos
    })
}
export default connect(mapStateToProps, {
    hundleNameUpdate,
    hundleDescriptionUpdate,
    hundleTodoUpdate,
    hundleTodoSend
})(TodoComponent)