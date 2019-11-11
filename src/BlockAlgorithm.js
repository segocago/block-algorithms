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

        paddingBottom: "2%",
        marginTop: "2%",
        marginLeft: "2%",
        marginRight: "2%",
        borderStyle: "transparent",
        borderWidth: "2px",
        borderRadius: "10px",
        //maxWidth: "85%"        
    },
    subContainer: {
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "10px",
        display: "inline-block",
        paddingRight: "40px",
        width: "100%",
        overflow: "auto",
        maxHeight: "600px",
        background: 'linear-gradient(to bottom, #0066ff, #b3ecff)'
    }
}

function saveObject(obj, filename) {
    let text = JSON.stringify(obj);
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
}

class BlockAlgorithm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableBlocks: props.initialAvailableBlocks,
            sequenceBlocks: props.initialSequenceBlocks,
            algorithmInformation: props.initialAlgorithmInformation
        };
    }

    onRunClicked() {
        //Clear output
        let newOutput = [];
        let sequenceBlocks = this.state.sequenceBlocks;
        let algorithmInformation = this.state.algorithmInformation;
        for (let i = 0; i < sequenceBlocks.length; i++) {
            let block = sequenceBlocks[i];
            console.log(block);

            let blockFuntion = block.blockFunction;
            let outputMessage;
            if (typeof (blockFuntion) != "undefined") {
                outputMessage = block.blockFunction();
            } else {
                outputMessage = block.message;
            }
            newOutput.push({ sortIndex: i, message: outputMessage });
        }
        algorithmInformation.output = newOutput;
        this.setState({ algorithmInformation: algorithmInformation });
        console.log(this.state.algorithmInformation.output);
    }

    moveItemFromListToSequence(index) {

        let availableBlocks = this.state.availableBlocks;
        let sequenceBlocks = this.state.sequenceBlocks;

        console.log(index);
        let item = availableBlocks[index];
        sequenceBlocks.push(item);
        /*
        for (let i = 0; i < availableBlocks.length && !itemFound; i++) {
            let item = availableBlocks[i];

            if (item.key === key) {
                sequenceBlocks.push(item);
                //Do not remove item from available blocks to allow multiple block of same type
                //availableBlocks.splice(i, 1);
                itemFound = true;
            }
        }
        */
        this.setState({ availableBlocks: availableBlocks, sequenceBlocks: sequenceBlocks });
    }

    moveItemFromSequenceToList(index) {
        let availableBlocks = this.state.availableBlocks;
        let sequenceBlocks = this.state.sequenceBlocks;
        /*
        let itemFound = false;
        for (let i = 0; i < sequenceBlocks.length && !itemFound; i++) {
            let item = sequenceBlocks[i];

            if (item.key === key) {
                //Do not push the block back to available blocks, we are not removing blocks from available blocks
                //availableBlocks.push(item);
                
                itemFound = true;
            }
        }*/
        sequenceBlocks.splice(index, 1);
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

    onNewBlockCreate(newBlockMessage) {
        console.log("on new block created");
        let availableBlocks = this.state.availableBlocks;
        let newBlock = {
            message: newBlockMessage,
            key: availableBlocks.length + 1,
        }

        availableBlocks.push(newBlock);
        this.setState({ availableBlocks: availableBlocks });
    }

    onSaveAlgorithmClicked() {

        let algorithm = {
            algorithmInformation: this.state.algorithmInformation,
            sequenceBlocks: this.state.sequenceBlocks,
            availableBlocks: this.state.availableBlocks

        }
        saveObject(algorithm, "algorithm.json");
    }

    onAlgorithmLoaded(event) {

        let file = event.target.files[0];
        var reader = new FileReader();

        let blockAlgorithmComp = this;
        reader.onload = (function (reader) {
            return function () {
                var contents = reader.result;

                let algorithm = JSON.parse(contents);
                console.log(algorithm);
                let algorithmInformation = algorithm.algorithmInformation;
                let sequenceBlocks = algorithm.sequenceBlocks;
                let availableBlocks = algorithm.availableBlocks;
                blockAlgorithmComp.setState({
                    algorithmInformation: algorithmInformation,
                    sequenceBlocks: sequenceBlocks,
                    availableBlocks: availableBlocks
                })

            }
        })(reader);
        reader.readAsText(file);
    }

    onEditAlgorithmInformation(newAlgorithmInformation) {
        console.log("on edit algo");
        let algorithmInformation = {
            algorithmName: newAlgorithmInformation.objective,
            algorithmDescription: newAlgorithmInformation.description,
            output: []
        }
        this.setState({ algorithmInformation: algorithmInformation });

    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <Container fluid={true} >
                    <Row >
                        <Col md="4">
                            <div className={classes.subContainer}>
                                <AlgorithmInformation
                                    onEditAlgorithmInformation={this.onEditAlgorithmInformation.bind(this)}
                                    onSaveAlgorithmClicked={this.onSaveAlgorithmClicked.bind(this)}
                                    onAlgorithmLoaded={this.onAlgorithmLoaded.bind(this)}
                                    onNewBlockCreate={this.onNewBlockCreate.bind(this)}
                                    algorithmInformation={this.state.algorithmInformation}
                                ></AlgorithmInformation>
                            </div>
                        </Col>
                        <Col md="4" >
                            <BlockSequence onRunClicked={this.onRunClicked.bind(this)} onSortEnd={this.onSortEnd.bind(this)} items={this.state.sequenceBlocks} moveItemFromSequenceToList={this.moveItemFromSequenceToList.bind(this)}> </BlockSequence>
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
