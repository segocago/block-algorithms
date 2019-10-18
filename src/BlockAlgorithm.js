import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { arrayMove, mutate } from 'array-move';

import BlockSequence from "./BlockSequence"
import BlockList from "./BlockList"
import AlgorithmInformation from "./AlgorithmInformation"

import { withStyles } from '@material-ui/core/styles';

const styles = {

    blockList: {
        //textAlign: "right",

    },
    blockSequence: {
        //textAlign: "right",

    },
    container: {
        textAlign: "center",
        height : "100%",
    }

}

class BlockAlgorithm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { availableBlocks: props.initialAvailableBlocks,
             sequenceBlocks: props.initialSequenceBlocks ,
             algorithmInformation : props.initialAlgorithmInformation};
    }

    onRunClicked(){
        //Clear output
        let newOutput = [];
        let sequenceBlocks = this.state.sequenceBlocks;
        let algorithmInformation = this.state.algorithmInformation;
        for(let i=0;i<sequenceBlocks.length;i++){
          let block = sequenceBlocks[i];
          console.log(block); 
          
          newOutput.push({key: block.key,message: block.blockFunction()});
        }
        algorithmInformation.output = newOutput;
        this.setState({algorithmInformation : algorithmInformation});    
      }

    moveItemFromListToSequence(key) {

        let availableBlocks = this.state.availableBlocks;
        let sequenceBlocks = this.state.sequenceBlocks;

        let itemFound = false;
        for (let i = 0; i < availableBlocks.length && !itemFound; i++) {
            let item = availableBlocks[i];

            if (item.key === key) {
                sequenceBlocks.push(item);
                //Do not remove item from available blocks to allow multiple block of same type
                //availableBlocks.splice(i, 1);
                itemFound = true;
            }
        }
        this.setState({ availableBlocks: availableBlocks, sequenceBlocks: sequenceBlocks });
    }

    moveItemFromSequenceToList(key) {
        let availableBlocks = this.state.availableBlocks;
        let sequenceBlocks = this.state.sequenceBlocks;

        let itemFound = false;
        for (let i = 0; i < sequenceBlocks.length && !itemFound; i++) {
            let item = sequenceBlocks[i];

            if (item.key === key) {
                availableBlocks.push(item);
                sequenceBlocks.splice(i, 1);
                itemFound = true;
            }
        }
        this.setState({ availableBlocks: availableBlocks, sequenceBlocks: sequenceBlocks });
    }

    //Handle reordering at block sequence
    onSortEnd({ oldIndex, newIndex }) {
        let sequenceBlocks = this.state.sequenceBlocks;

        //Move array in place
        mutate(sequenceBlocks, oldIndex, newIndex);
        /*let temp = sequenceBlocks[oldIndex];
        sequenceBlocks[oldIndex] = sequenceBlocks[newIndex];
        sequenceBlocks[newIndex] = temp;*/
        this.setState({ sequenceBlocks: sequenceBlocks });
    };

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Container className = {classes.container}>
                    <Row >
                        <Col md="4">
                            <AlgorithmInformation algorithmInformation={this.state.algorithmInformation}></AlgorithmInformation>
                        </Col>
                        <Col md="4" >
                            <BlockSequence onRunClicked = {this.onRunClicked.bind(this)} onSortEnd={this.onSortEnd.bind(this)} items={this.state.sequenceBlocks} moveItemFromSequenceToList={this.moveItemFromSequenceToList.bind(this)}> </BlockSequence>
                        </Col>
                        <Col md="4" >
                            <BlockList items={this.state.availableBlocks} moveItemFromListToSequence={this.moveItemFromListToSequence.bind(this)}></BlockList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(BlockAlgorithm);
