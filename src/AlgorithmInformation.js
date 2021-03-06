import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typography from "@material-ui/core/Typography";
import CreateBlock from "./CreateBlock";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import EditAlgorithmInformation from './EditAlgorithmInformation';
import Highlighter from "react-highlight-words";

const styles = {

    card: {
        //maxWidth: 345,
        marginBottom: 10,
        maxHeight: "100%",
        borderRadius: "10px",
        borderWidth: "2px",
        borderColor: "black",
        borderStyle: "solid",
        textAlign: "left",
    },
    input: {
        display: 'none',
    },
    button: {
        textAlign: "center",
        marginBottom: "15px",
        marginTop: "15px",


    },
    container: {
        paddingTop: "15px",
        paddingLeft: "25px",
        paddingRight: "15px",
        paddingBottom: "15px",

    },
    multiLineTextArea: {
        whiteSpace: "pre-wrap"
    },
    outputTopContainer: {
        justifyContent: "center"
    },

};

class AlgorithmInformation extends React.Component {

    constructor(props) {
        super(props);
        //this.state = props;
        this.state = { expanded: false };

    }

    createOutputMessages() {
        let outputMessageComponents = [];
        let outputMessages = this.props.algorithmInformation.output;
        if (typeof (outputMessages) === "undefined") {
            return;
        }
        //let selection = this.state.highlightedSelection;
        let variables = this.state.variables;
        let searchWords = [];
        if (variables) {
            variables = variables.split(",");
            for (let i = 0; i < variables.length; i++) {
                searchWords.push(variables[i])
            }

        }

        for (let i = 0; i < outputMessages.length; i++) {

            let message = outputMessages[i].message;

            outputMessageComponents.push(<Typography variant="body2" color="textSecondary" component="p" display="inline" >
                <b>{outputMessages[i].sortIndex + 1}.</b>
                <Highlighter
                    searchWords={searchWords}
                    autoEscape={true}
                    textToHighlight={message}
                /> <br></br>
            </Typography>)
        }
        return (outputMessageComponents);
    }

    handleExpandClick = () => {
        console.log("expand clicked");
        let isExpanded = this.state.expanded;
        this.setState({ expanded: !isExpanded });
    };

    /*
    onOutputMouseUp() {
        let selected = window.getSelection().toString();
        if (selected.length > 0) {
            this.setState({ highlightedSelection: selected })
        } else {
            this.setState({ highlightedSelection: null })

        }
    }
    */

    onVariablesChanged(event) {
        this.setState({ variables: event.target.value });
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" color="textPrimary" component="p" display="block" >
                            Objective:  {this.props.algorithmInformation.algorithmName}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p" display="block" >
                            {this.props.algorithmInformation.algorithmDescription}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent >
                        <Container className={classes.outputTopContainer}>
                            <Row>
                                <Col>
                                    <Typography variant="h5" color="textPrimary" component="p" display="block" >
                                        Output
                                    </Typography>
                                </Col>
                                <Col>
                                    <TextField
                                        value={this.state.variables}
                                        required
                                        id="outlined-basic"
                                        label="Variables"
                                        helperText ="Coma seperate variable names. E.g area,radius"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.onVariablesChanged.bind(this)}
                                    />
                                </Col>
                            </Row>
                        </Container>
                        <Typography align="left" variant="h6" color="textSecondary" component="p" display="block" >
                            <div className={classes.multiLineTextArea} >
                                {this.createOutputMessages.bind(this)()}
                            </div>
                        </Typography>
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
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" color="textPrimary" component="p" display="block" >
                            Generate Java Class Template
                        </Typography>
                        <Button variant="contained" component="span" className={classes.button} onClick={this.props.generateJavaTemplate.bind(this)}>
                            Generate Template
                        </Button>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <CreateBlock onNewBlockCreate={this.props.onNewBlockCreate.bind(this)}></CreateBlock>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <EditAlgorithmInformation onEditAlgorithmInformation={this.props.onEditAlgorithmInformation}></EditAlgorithmInformation>
                    </CardContent>
                </Card>
            </div >
        )
    }
}
export default withStyles(styles)(AlgorithmInformation);
