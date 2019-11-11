import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { arrayMove, mutate } from 'array-move';

import BlockSequence from "./BlockSequence"
import BlockList from "./BlockList"
<<<<<<< HEAD

=======
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
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
<<<<<<< HEAD

        paddingBottom: "2%",
        marginTop: "2%",
        marginLeft: "2%",
        marginRight: "2%",
        borderStyle: "transparent",
        borderWidth: "2px",
        borderRadius: "10px",
        //maxWidth: "85%"        
    }
}

function saveObject(obj, filename) {
    let text = JSON.stringify(obj);
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
=======
        textAlign: "center",
        height : "100%",
    }

>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
}

class BlockAlgorithm extends React.Component {

    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {
            availableBlocks: props.initialAvailableBlocks,
            sequenceBlocks: props.initialSequenceBlocks,
            algorithmInformation: props.initialAlgorithmInformation
        };
    }

    onRunClicked() {
=======
        this.state = { availableBlocks: props.initialAvailableBlocks,
             sequenceBlocks: props.initialSequenceBlocks ,
             algorithmInformation : props.initialAlgorithmInformation};
    }

    onRunClicked(){
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
        //Clear output
        let newOutput = [];
        let sequenceBlocks = this.state.sequenceBlocks;
        let algorithmInformation = this.state.algorithmInformation;
<<<<<<< HEAD
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
=======
        for(let i=0;i<sequenceBlocks.length;i++){
          let block = sequenceBlocks[i];
          console.log(block); 
          
          newOutput.push({key: block.key,message: block.blockFunction()});
        }
        algorithmInformation.output = newOutput;
        this.setState({algorithmInformation : algorithmInformation});    
      }
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2

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
<<<<<<< HEAD
                //Do not push the block back to available blocks, we are not removing blocks from available blocks
                //availableBlocks.push(item);
=======
                availableBlocks.push(item);
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
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

<<<<<<< HEAD
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
            sequenceBlocks : this.state.sequenceBlocks,
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
                blockAlgorithmComp.setState( {
                    algorithmInformation : algorithmInformation,
                    sequenceBlocks : sequenceBlocks,
                    availableBlocks : availableBlocks
                })                

            }
        })(reader);
        reader.readAsText(file);
    }

    onEditAlgorithmInformation(newAlgorithmInformation) {
        console.log("on edit algo");
        let algorithmInformation = {
            algorithmName : newAlgorithmInformation.objective,
            algorithmDescription: newAlgorithmInformation.description,
            output : []
        }
        this.setState({algorithmInformation : algorithmInformation});
        
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <Container fluid={true} >
                    <Row >
                        <Col md="4">
                            <AlgorithmInformation
                                onEditAlgorithmInformation = {this.onEditAlgorithmInformation.bind(this)}
                                onSaveAlgorithmClicked={this.onSaveAlgorithmClicked.bind(this)}
                                onAlgorithmLoaded={this.onAlgorithmLoaded.bind(this)}
                                onNewBlockCreate={this.onNewBlockCreate.bind(this)}
                                algorithmInformation={this.state.algorithmInformation}
                            ></AlgorithmInformation>
                        </Col>
                        <Col md="4" >
                            <BlockSequence onRunClicked={this.onRunClicked.bind(this)} onSortEnd={this.onSortEnd.bind(this)} items={this.state.sequenceBlocks} moveItemFromSequenceToList={this.moveItemFromSequenceToList.bind(this)}> </BlockSequence>
=======
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
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
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
