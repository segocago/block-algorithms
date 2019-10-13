import React from 'react';
import './App.css';
import BlockSequence from "./BlockSequence"
import BlockList from "./BlockList"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {arrayMove,mutate} from 'array-move';

const initialAvailableBlocks = [
  {
    key: 4,
    message: 'Saw the table into 2 equal piece with a chainsaw',
  },
  {
    key: 5,
    message: 'Lift the table',
    subMessages: [
      "Find 2 person to lift the table",
      "Go to opposite sides of the table",
      "Grab the table",
      "Move table in upward direction"
    ]
  },
  {
    key: 6,
    message: 'Rub table legs with sandpaper',
  }
];

const initialSequenceBlocks = [
  {
    key: 1,
    message: 'Lay the table top upside-down on the ground',
  },
  {
    key: 2,
    message: 'Attach a table leg to each corner of the table top',
    subMessages: ["For each corner of the table top",
      "position a flange on the corner",
      "secure flange in place with 3 screws ",
      "screw a leg into the flange"
    ]
  },
  {
    key: 3,
    message: 'Turn the completed table the right way up',
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { availableBlocks: initialAvailableBlocks, sequenceBlocks: initialSequenceBlocks };
  }

  moveItemFromListToSequence(key) {

    let availableBlocks = this.state.availableBlocks;
    let sequenceBlocks = this.state.sequenceBlocks;

    let itemFound = false;
    for (let i = 0; i < availableBlocks.length && !itemFound; i++) {
      let item = availableBlocks[i];

      if (item.key === key) {
        sequenceBlocks.push(item);
        availableBlocks.splice(i, 1);
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
  onSortEnd({oldIndex, newIndex}) {    
    let sequenceBlocks = this.state.sequenceBlocks;

    //Move array in place
    mutate(sequenceBlocks, oldIndex, newIndex);
    /*let temp = sequenceBlocks[oldIndex];
    sequenceBlocks[oldIndex] = sequenceBlocks[newIndex];
    sequenceBlocks[newIndex] = temp;*/
    this.setState({sequenceBlocks:sequenceBlocks});      
  };

  render() {
    return (
      <div class="app">
        <Container>
          <Row>
            <Col>
              <BlockList items={this.state.availableBlocks} moveItemFromListToSequence={this.moveItemFromListToSequence.bind(this)}></BlockList>
            </Col>
            <Col>
              <BlockSequence onSortEnd={this.onSortEnd.bind(this)} items={this.state.sequenceBlocks} moveItemFromSequenceToList={this.moveItemFromSequenceToList.bind(this)}> </BlockSequence>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
