import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

<<<<<<< HEAD
//import "./BlockSequence.css"
=======
import "./BlockSequence.css"
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
import ListIcon from "@material-ui/icons/List"
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Fab from '@material-ui/core/Fab';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { withStyles } from '@material-ui/core/styles';
import Block from "./Block"

const styles = {

    fab: {
        maxWidth: 35,
        maxHeight: 25,
<<<<<<< HEAD
        backgroundColor: "green"
    },
    dragHandle: {
        width :"95px",
        maxWidth: 95,
        maxHeight: 95, 
    },
    headerContainer: {
        paddingTop: "5px",
    },
    blockSequenceContainer: {

        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "10px",
        backgroundColor: "#66ffff",
        display: "inline-block",
        paddingRight: "40px",
        width: "100%",
        overflow: "auto",
        maxHeight: "600px"
    }
};

const DragHandle = SortableHandle((className) => <ListIcon  color="secondary" >></ListIcon>);
=======
        backgroundColor : "green"
    },
    headerContainer: {
        paddingTop : "5px",

    }
};

const DragHandle = SortableHandle(() => <ListIcon color="secondary" >></ListIcon>);
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2

class BlockSequence extends React.Component {

    constructor(props) {
<<<<<<< HEAD
        super(props);        
=======
        super(props);
        console.log(props);

>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
    }

    SortableItem = SortableElement(({ moveItemFromSequenceToList, value, sortIndex }) =>

        <li key={value.key} >
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col sm="1">
                        <DragHandle/>
                    </Col>
                    <Col sm="11">
                        <Block
                            deleteButtonHandler={moveItemFromSequenceToList.bind(this)}
                            blockContent={value}
                            showSortIndex={true}
                            sortIndex={sortIndex}
                            addButtonVisible={false}
                            deleteButtonVisible={true}></Block>
                    </Col>
                </Row>
            </Container>
=======
            <DragHandle /> <Block deleteButtonHandler={moveItemFromSequenceToList.bind(this)} blockContent={value} sortIndex={sortIndex} addButtonVisible={false} deleteButtonVisible={true}></Block>
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
        </li>
    );

    SortableList = SortableContainer(({ moveItemFromSequenceToList, items }) => {

        return (
            <ul style={{ listStyleType: "none" }}>
                {items.map((value, index) => (
                    <this.SortableItem moveItemFromSequenceToList={moveItemFromSequenceToList} key={value.key} index={index} sortIndex={index} value={value} />
                ))}
            </ul>
        );
    });
<<<<<<< HEAD

    render() {
        const classes = this.props.classes;        
        return (
            <div className={classes.blockSequenceContainer}>
                <Container className={classes.headerContainer}>
                    <Row>
                        <Col md="9">
                            <Typography variant="h6" display="inline">
                                Blocks To Be Executed
                            </Typography>
                        </Col>
                        <Col>
                            <Fab className={classes.fab} onClick={this.props.onRunClicked.bind(this)} color="primary" aria-label="add">
=======
    /*
        onSortEnd = ({ oldIndex, newIndex }) => {
            this.setState(({ items }) => ({
                items: arrayMove(items, oldIndex, newIndex),
            }));
        };*/

    render() {
        let classes = this.props.classes;

        return (
            <div class="block-sequence-container">
                <Container className = {classes.headerContainer}>
                    <Row>
                        <Col md="9">
                            <Typography variant="h6" display="inline">
                                Blocks in Sequence
                            </Typography>
                        </Col>
                        <Col>
                            <Fab className = {classes.fab} onClick={this.props.onRunClicked.bind(this)} color="primary" aria-label="add">
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
                                <PlayArrowIcon />
                            </Fab>
                        </Col>
                    </Row>
                </Container>
                <this.SortableList moveItemFromSequenceToList={this.props.moveItemFromSequenceToList.bind(this)} items={this.props.items} onSortEnd={this.props.onSortEnd} useDragHandle />

            </div>
        );
    }
}
export default withStyles(styles)(BlockSequence);