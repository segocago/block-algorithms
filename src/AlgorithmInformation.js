import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
<<<<<<< HEAD
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typography from "@material-ui/core/Typography";
import CreateBlock from "./CreateBlock";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import EditAlgorithmInformation from './EditAlgorithmInformation';
=======
import Typography from "@material-ui/core/Typography";

import { withStyles } from '@material-ui/core/styles';
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2

const styles = {

    card: {
<<<<<<< HEAD
        //maxWidth: 345,
=======
        maxWidth: 345,
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
        marginBottom: 10,
        maxHeight: "100%",
        borderRadius: "10px",
        borderWidth: "2px",
        borderColor: "black",
<<<<<<< HEAD
        borderStyle: "solid",
        textAlign: "left"
    },
    input: {
        display: 'none',
    },
    button: {
        textAlign: "center",
        marginBottom: "15px",
        marginTop: "15px",

    }
};

=======
        borderStyle: "solid"
    },
};


>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
class AlgorithmInformation extends React.Component {

    constructor(props) {
        super(props);
        //this.state = props;
        this.state = { expanded: false };

    }

    createOutputMessages() {
        let outputMessageComponents = [];
        let outputMessages = this.props.algorithmInformation.output;
<<<<<<< HEAD
        if (typeof (outputMessages) === "undefined") {
=======
        if (typeof (outputMessages ) === "undefined") {
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
            return;
        }
        for (let i = 0; i < outputMessages.length; i++) {
            outputMessageComponents.push(<Typography variant="body2" color="textSecondary" component="p" display="inline" >
<<<<<<< HEAD
                <b>{outputMessages[i].sortIndex}.</b> {outputMessages[i].message} <br></br>
=======
               <b>{outputMessages[i].key}.</b> {outputMessages[i].message} <br></br>
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
            </Typography>)
        }
        return (outputMessageComponents);
    }

    handleExpandClick = () => {
        console.log("expand clicked");
        let isExpanded = this.state.expanded;
        this.setState({ expanded: !isExpanded });
    };

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" color="textPrimary" component="p" display="block" >
                            Objective:  {this.props.algorithmInformation.algorithmName}
                        </Typography>
                        <Typography variant="h7" color="textSecondary" component="p" display="block" >
                            {this.props.algorithmInformation.algorithmDescription}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
<<<<<<< HEAD
                        <Typography variant="h5" color="textPrimary" component="p" display="block" >
                            Output
                        </Typography>
                        <Typography align="left" variant="h7" color="textSecondary" component="p" display="block" >
                            {this.createOutputMessages.bind(this)()}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <CreateBlock onNewBlockCreate={this.props.onNewBlockCreate.bind(this)}></CreateBlock>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <EditAlgorithmInformation onEditAlgorithmInformation = {this.props.onEditAlgorithmInformation}></EditAlgorithmInformation>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" color="textPrimary" component="p" display="block" >
                            Save/Load Algorithms
                        </Typography>
                        <Container>
                            <Row>
                                <Col>
                                    <Button variant="contained" component="span" className={classes.button} onClick={this.props.onSaveAlgorithmClicked.bind(this)}>
                                        Save current algorithm
                                    </Button>
                                </Col>
                                <Col>
                                    <input
                                        accept=".json"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        onChange={this.props.onAlgorithmLoaded}
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span" className={classes.button}>
                                            Load algorithm
                            </Button>
                                    </label>
                                </Col>
                            </Row>
                        </Container>
                    </CardContent>
                </Card>
            </div >
        )
    }
}
export default withStyles(styles)(AlgorithmInformation);
=======
                        <Typography variant="h4" color="textPrimary" component="p" display="block" >
                            Output
                        </Typography>
                        <Typography variant="h7" color="textSecondary" component="p" display="block" >
                        {this.createOutputMessages.bind(this)()}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default withStyles(styles)(AlgorithmInformation);
>>>>>>> cfad729ed943ea945fdb19cda3ddf8ae150d65e2
