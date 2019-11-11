import React from 'react';
import './App.css';
import BlockAlgorithm from "./BlockAlgorithm";

<<<<<<< HEAD
function test() {
=======
function test(){
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
  console.log("test");
}

const blockFunctions = [
<<<<<<< HEAD
  {
    key: 1,
    blockFunction: () => { return "Table is turned upside down and on the ground." }
  },
  {
    key: 2,
    blockFunction: () => { return "Attached 4 legs to corner of table." }
  },
  {
    key: 3,
    blockFunction: () => { return "Table is on its legs." }
  },
=======
{
  key : 1,
  blockFunction: () => {return "Table is turned upside down and on the ground."}
},
{
  key : 2,
  blockFunction: () => {return "Attached 4 legs to corner of table."}
},
{
  key : 3,
  blockFunction: () => {return "Table is on its legs."}
},
{
  key : 4,
  blockFunction: () => {return "Table got cut down to 2 pieces."}
},
{
  key : 5,
  blockFunction: () => {return "Table is lifte 20cm from the ground."}
},
{
  key : 6,
  blockFunction: () => {return "Table legs are smoother, there are sawdust on the ground."}
},
]
const initialAvailableBlocks = [
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
  {
    key: 1,
    message: 'Lay the table top upside-down on the ground',
    blockFunction : blockFunctions[0].blockFunction
  },
  {
    key: 2,
    message: 'Attach a table leg to each corner of the table top',
    subMessages: ["For each corner of the table top",
      "position a flange on the corner",
      "secure flange in place with 3 screws ",
      "screw a leg into the flange"
    ],
    onExecute : test,
    blockFunction : blockFunctions[1].blockFunction
  },
  {
    key: 3,
    message: 'Turn the completed table the right way up',
    blockFunction : blockFunctions[2].blockFunction
  },
  {
    key: 4,
<<<<<<< HEAD
    blockFunction: () => { return "Table got cut down to 2 pieces." }
  },
  {
    key: 5,
    blockFunction: () => { return "Table is lifte 20cm from the ground." }
  },
  {
    key: 6,
    blockFunction: () => { return "Table legs are smoother, there are sawdust on the ground." }
  },
]
const initialAvailableBlocks = [
  {
    key: 1,
    message: 'Lay the table top upside-down on the ground',
    blockFunction: blockFunctions[0].blockFunction
  },
  {
    key: 2,
    message: 'Attach a table leg to each corner of the table top',
    subMessages: ["For each corner of the table top",
      "position a flange on the corner",
      "secure flange in place with 3 screws ",
      "screw a leg into the flange"
    ],
    onExecute: test,
    blockFunction: blockFunctions[1].blockFunction
  },
  {
    key: 3,
    message: 'Turn the completed table the right way up',
    blockFunction: blockFunctions[2].blockFunction
  },
  {
    key: 4,
    message: 'Saw the table into 2 equal piece with a chainsaw',
    blockFunction: blockFunctions[3].blockFunction
  },
  {
    key: 5,
    message: 'Lift the table',
    subMessages: [
      "Find 2 person to lift the table",
      "Go to opposite sides of the table",
      "Grab the table",
      "Move table in upward direction"
    ],
    blockFunction: blockFunctions[4].blockFunction
  },
  {
    key: 6,
    message: 'Rub table legs with sandpaper',
    blockFunction: blockFunctions[5].blockFunction
=======
    message: 'Saw the table into 2 equal piece with a chainsaw',
    blockFunction : blockFunctions[3].blockFunction
  },
  {
    key: 5,
    message: 'Lift the table',
    subMessages: [
      "Find 2 person to lift the table",
      "Go to opposite sides of the table",
      "Grab the table",
      "Move table in upward direction"
    ],
    blockFunction : blockFunctions[4].blockFunction
  },
  {
    key: 6,
    message: 'Rub table legs with sandpaper',
    blockFunction : blockFunctions[5].blockFunction
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
  }
];

const initialSequenceBlocks = [

];

const initialAlgorithmInformation = {
  algorithmName: "Build a table",
<<<<<<< HEAD
  algorithmDescription: "Use available blocks to build a functional table.",
  output: ""
=======
  algorithmDescription:"Use available blocks to build a functional table.",
  output : ""
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
}

class App extends React.Component {

  render() {
    return (
      <div class="app">
<<<<<<< HEAD
        <BlockAlgorithm
          initialAlgorithmInformation={initialAlgorithmInformation}
          initialAvailableBlocks={initialAvailableBlocks}
          initialSequenceBlocks={initialSequenceBlocks}></BlockAlgorithm>
=======
        <BlockAlgorithm  initialAlgorithmInformation = {initialAlgorithmInformation } initialAvailableBlocks = {initialAvailableBlocks} initialSequenceBlocks = {initialSequenceBlocks}></BlockAlgorithm>
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
      </div>
    );
  }
}
export default App;
