import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import "./BlockSequence.css"
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
        backgroundColor : "green"
    },
    headerContainer: {
        paddingTop : "5px",

    }
};

const DragHandle = SortableHandle(() => <ListIcon color="secondary" >></ListIcon>);

class BlockSequence extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

    }

    SortableItem = SortableElement(({ moveItemFromSequenceToList, value, sortIndex }) =>

        <li key={value.key} >
            <DragHandle /> <Block deleteButtonHandler={moveItemFromSequenceToList.bind(this)} blockContent={value} sortIndex={sortIndex} addButtonVisible={false} deleteButtonVisible={true}></Block>
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