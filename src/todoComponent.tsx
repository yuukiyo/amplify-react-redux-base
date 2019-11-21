import React from 'react'
import { makeStyles, TextField, Fab } from '@material-ui/core'
import { State } from './reducer'
import { todoHundler } from './todoContainer'
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles({
    textFormWrapper: {
        padding: 30,
        textAlign: 'center',
        '& button': {
            padding: '0 50px'
        }
    },
    textFieldWrapper: {
        marginBottom: 30
    },
});

type Props = State & todoHundler

export const TodoComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.textFormWrapper}>
                <TextField
                    onChange={(e) => props.hundleNameUpdate(e.target.value)}
                    label="Todo Name"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={props.name}
                    className={classes.textFieldWrapper}
                />
                <TextField
                    onChange={(e) => props.hundleDescriptionUpdate(e.target.value)}
                    label="Description"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={props.description}
                    className={classes.textFieldWrapper}
                />
                <Fab 
                onClick={() => props.hundleTodoSend(
                    props.name,
                    props.description
                )}
                variant="extended" 
                aria-label="like">
                    <NavigationIcon />Send
                </Fab>
            </div>
        </>
    )
}