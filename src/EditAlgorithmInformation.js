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

class EditAlgorithmInformation extends React.Component {

    constructor(props){
        super(props);
        this.state = {objective :"", description: ""};
    }

    //Prevent submit on enter
    onKeyPress(event) {
        if (event.target.type !== 'textarea' && event.which === 13 /* Enter */) {
            event.preventDefault();
      }
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Typography variant="h5" color="textPrimary" component="p" display="block" >
                    Edit Algorithm Information
                        </Typography>
                <form onKeyPress={this.onKeyPress} onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        value = {this.state.objective}
                        required
                        id="outlined-basic"
                        label="Problem Objective"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleObjectiveChange.bind(this)}
                    />
                    <TextField
                    value = {this.state.description}
                        required
                        id="outlined-basic"
                        label="Problem Description"
                        className={classes.textField}
                        multiline
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleDescriptionChange.bind(this)}
                    />
                    <div className={classes.submitButtonContainer}>
                        <button type="submit" variant="contained" component="span" className={classes.button}>
                            Save
                     </button>
                    </div>
                </form>
            </div>
        );
    }
    handleObjectiveChange(event) {
       this.setState({ objective: event.target.value });
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
     }

    handleSubmit(event) {
        //Prevent page refresh
        event.preventDefault();        
        this.props.onEditAlgorithmInformation(this.state);
        //Clear the state
        this.setState ({objective :"",description: ""});
    }

}

export default withStyles(styles)(EditAlgorithmInformation);

