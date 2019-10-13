import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import "./BlockSequence.css"
import ListIcon from "@material-ui/icons/List"
import Typography from '@material-ui/core/Typography';


import Block from "./Block"

const DragHandle = SortableHandle(() => <ListIcon color="secondary" >></ListIcon>);

class BlockSequence extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);   

    }

    SortableItem = SortableElement(({moveItemFromSequenceToList,value, sortIndex }) =>
    
        <li key={value.key} >
            <DragHandle /> <Block  deleteButtonHandler={moveItemFromSequenceToList.bind(this)} blockContent={value} sortIndex={sortIndex} addButtonVisible={false} deleteButtonVisible={true}></Block>
        </li>
    );

    SortableList = SortableContainer(({ moveItemFromSequenceToList, items }) => {
        
        return (
            <ul style={{ "listStyleType": "none" }}>
                {items.map((value, index) => (
                    <this.SortableItem moveItemFromSequenceToList= {moveItemFromSequenceToList} key={value.key} index={index} sortIndex={index} value={value} />
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
        
        return (
            <div class="block-sequence-container">
                <Typography variant="h6">
                    Blocks in Sequence
                 </Typography>
                <this.SortableList moveItemFromSequenceToList= {this.props.moveItemFromSequenceToList.bind(this)} items={this.props.items} onSortEnd={this.props.onSortEnd} useDragHandle />
            </div>
        );
    }
}
export default BlockSequence;