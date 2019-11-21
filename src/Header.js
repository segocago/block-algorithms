import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import logo from "./resources/bilkent_amblem.png";

const styles = {

    container: {
        background: "#ffffff",
        height: "10%",
        position: "relative"
    },
    logoContainer: {
        textAlign: "left",     
        marginLeft: "10px",
        
    },
    logo: {
        height: "100%",        
        width: "auto",       
        lineHeight:"100%",       

    },
    


}
class Header extends React.Component {

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <div className={classes.logoContainer}>
                    {/*<img src={logo} className={classes.logo} alt="logo"></img> */}
                    <div className={classes.logo}>                      

                       <p className= {classes.logo}> Bilkent University Block Algorithms                     </p>
                        
                    </div>
                </div>

                <nav>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                    <NavLink activeClassName="active" to="/users">
                        Users
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                </nav>
            </div>
        );
    }

}

export default withStyles(styles)(Header);