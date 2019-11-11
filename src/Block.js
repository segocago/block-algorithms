import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
//import "./Block.css";

const styles = {

    card: {
        maxWidth: 345,
        marginBottom: 20,
        maxHeight: "100%",
        textAlign : "left"

    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    fab: {
        maxWidth: 35,
        maxHeight: 25
    }
};

class Block extends React.Component {

    constructor(props) {
        super(props);
        //this.state = props;
        this.state = { expanded: false };       
        
    }

    handleExpandClick = () => {
        console.log("expand clicked");
        let isExpanded = this.state.expanded;
        this.setState({ expanded: !isExpanded });
        
    };

    createSubmessages() {
        let subMessageComponents = [];
        if (typeof (this.props.blockContent.subMessages) === "undefined") {
            return;
        }
        for (let i = 0; i < this.props.blockContent.subMessages.length; i++) {
            subMessageComponents.push(<Typography variant="body2" color="textSecondary" component="p" display="inline" >
                {this.props.blockContent.subMessages[i]} <br></br>
            </Typography>)
        }
        return (subMessageComponents);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
<<<<<<< HEAD
                        <Typography variant="body2" color="textPrimary" component="p" display="inline" >                            
                            <b>{this.props.showSortIndex ? this.props.sortIndex + ".":""} </b> {this.props.blockContent.message}
=======
                        <Typography variant="body2" color="textPrimary" component="p" display="inline" >
                            <b>{this.props.blockContent.key} </b>. {this.props.blockContent.message}
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Fab onClick = {event => {this.props.addButtonHandler(this.props.blockContent.key)}} color="primary" aria-label="add" className={classes.fab} style={{ display: this.props.addButtonVisible ? "block" : "none" }}>
                            <AddIcon />
                        </Fab>
                        <Fab onClick = {event => {this.props.deleteButtonHandler(this.props.blockContent.key)}} aria-label="delete" className={classes.fab} style={{ display: this.props.deleteButtonVisible ? "block" : "none" }}>
                            <DeleteIcon />
                        </Fab>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: this.state.expanded
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="show more"
                            style={{ display: typeof (this.props.blockContent.subMessages) === "undefined" ? "none" : "block" }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {this.createSubmessages.bind(this)()}
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        )
    }
}
export default withStyles(styles)(Block);