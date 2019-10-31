import React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import Block from "./Block";


import { withStyles } from '@material-ui/core/styles';

const styles = {

    blockListContainer: {

        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "10px",
        width: "100%",          
        overflow: "auto",
        backgroundColor: "#66ff66",
        display: "inline-block",
        paddingRight: "5%",
        paddingLeft: "5%",
        maxHeight : "600px"

    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {

    },
    title: {

    },
    list: {
        
    }
};

class BlockList extends React.Component {

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.blockListContainer}>

                <Typography variant="h6" className={classes.title}>
                    Available Blocks
                </Typography>
                <div className={classes.demo}>
                    <List dense={true} className={classes.list}>
                        {this.props.items.map((item, index) => (
                            <li key={item.key}>
                                <Block
                                    key={item.key}
                                    blockContent={item}
                                    showSortIndex = {false}
                                    sortIndex={index}
                                    addButtonVisible={true}
                                    deleteButtonVisible={false}
                                    addButtonHandler={this.props.moveItemFromListToSequence.bind(this)}>
                                </Block>
                            </li>
                        ))}
                    </List>
                </div>
            </div >
        );
    }
}
export default withStyles(styles)(BlockList);