import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

import { withStyles } from '@material-ui/core/styles';

const styles = {

    card: {
        maxWidth: 345,
        marginBottom: 10,
        maxHeight: "100%",
        borderRadius: "10px",
        borderWidth: "2px",
        borderColor: "black",
        borderStyle: "solid"
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
        if (typeof (outputMessages ) === "undefined") {
            return;
        }
        for (let i = 0; i < outputMessages.length; i++) {
            outputMessageComponents.push(<Typography variant="body2" color="textSecondary" component="p" display="inline" >
               <b>{outputMessages[i].key}.</b> {outputMessages[i].message} <br></br>
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