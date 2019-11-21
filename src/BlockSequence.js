import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

//import "./BlockSequence.css"
import ListIcon from "@material-ui/icons/List"
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from '@material-ui/core/Fab';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';
import Block from "./Block"

const styles = {

    fab1: {
        maxWidth: 35,
        maxHeight: 25,
        backgroundColor: "green",
        margingRight: "55px"
    },
    fab2: {
        maxWidth: 35,
        maxHeight: 25,
        backgroundColor: "blue",
        margingRight: "55px"
    },
    dragHandle: {
        width: "95px",
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
        background: 'linear-gradient(to bottom, #ff4d4d, #ffbb99)',
        display: "inline-block",
        paddingRight: "40px",
        width: "100%",
        overflow: "auto",
        maxHeight: "600px"
    }
};

const DragHandle = SortableHandle((className) => <ListIcon color="primary" >></ListIcon>);

class BlockSequence extends React.Component {

    constructor(props) {
        super(props);
    }

    SortableItem = SortableElement(({ moveItemFromSequenceToList, value, sortIndex }) =>

        <li key={sortIndex} >
            <Container>
                <Row>
                    <Col sm="1">
                        <DragHandle />
                    </Col>
                    <Col sm="11">
                        <Block
                            deleteButtonHandler={moveItemFromSequenceToList.bind(this)}
                            blockContent={value}
                            showSortIndex={true}
                            sortIndex={sortIndex}
                            addButtonVisible={false}
                            deleteButtonVisible={true}
                            isFocused = {sortIndex === this.props.nextBlockToExecute}></Block>
                    </Col>
                </Row>
            </Container>
        </li>
    );

    SortableList = SortableContainer(({ moveItemFromSequenceToList, items }) => {

        return (
            <ul style={{ listStyleType: "none" }}>
                {items.map((value, index) => (
                    <this.SortableItem moveItemFromSequenceToList={moveItemFromSequenceToList} key={index} index={index} sortIndex={index} value={value} />
                ))}
            </ul>
        );
    });    

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.blockSequenceContainer}>
                <Container className={classes.headerContainer}>
                    <Row>
                        <Col md="auto">
                            <Typography variant="h6" display="inline">
                                Blocks To Be Executed
                            </Typography>
                        </Col>
                        <Col>
                            <Tooltip title="Execute all blocks">
                                <Fab className={classes.fab1} onClick={this.props.onRunClicked.bind(this)} color="primary" aria-label="add">
                                    <PlayArrowIcon />
                                </Fab>
                            </Tooltip>
                        </Col>
                        <Col>
                            <Tooltip title="Execute current block">
                                <Fab className={classes.fab2} onClick={this.props.onExecuteCurrentClicked.bind(this)} color="primary" aria-label="add">
                                    <ArrowForwardIosIcon />
                                </Fab>
                            </Tooltip>
                        </Col>
                    </Row>
                </Container>
                <this.SortableList moveItemFromSequenceToList={this.props.moveItemFromSequenceToList.bind(this)} items={this.props.items} onSortEnd={this.props.onSortEnd} useDragHandle />

            </div>
        );
    }
}
export default withStyles(styles)(BlockSequence);