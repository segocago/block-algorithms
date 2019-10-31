import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';


const styles = {

    textField: {

        width: 200,
    },
    submitButtonContainer: {
        textAlign: "right",
    }
};

class CreateBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "Do this,do that"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Typography variant="h5" color="textPrimary" component="p" display="block" >
                    New Algorithm Block
                        </Typography>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        value={this.state.value}
                        required
                        id="outlined-basic"
                        label="Block Message"
                        className={classes.textField}
                        margin="normal"
                        variant ="outlined"
                        onChange={this.handleChange}
                    />
                    <div className={classes.submitButtonContainer}>
                        <button type="submit" variant="contained" component="span" className={classes.button}>
                            Create
                     </button>
                    </div>
                </form>
            </div>

        );
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //Prevent page refresh
        event.preventDefault();
        console.log("submit");
        this.props.onNewBlockCreate(this.state.value);
    }

}

export default withStyles(styles)(CreateBlock);