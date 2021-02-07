import React from "react"
import {AppBar, Grid, Toolbar} from "@material-ui/core";
// import AcUnitRoundedIcon from "@material-ui/icons/AccessibilityNewSharp";
import { makeStyles } from "@material-ui/styles";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles(() => ({
        typographyStyles: {
            flex: 1
        },
        Toolbar: {
            background: "primary",
        },
        avatar:{
            left:'2.0rem',
            top:'2.0rem',
            position:'absolute'
        }
    }
));

const Header = ({ siteTitle }) =>{
    const classes = useStyles();
    return(

    <header
        dir="rtl"

        style={{

        }}
    >
        <AppBar position="static">
            <Toolbar
                className={classes.Toolbar}
            >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0.90rem 1.0875rem`,
            }}
        >
            <Grid container spacing={20}>
                {/*<Grid item>*/}
                {/*    <div>*/}
                {/*       */}
                {/*    </div>*/}
                {/*</Grid>*/}
                <Grid item>
                    <h1>
                        pro-kit blog editor
                    </h1>
                </Grid>
                <Grid item>
                    <div
                        className={classes.avatar}
                    >
                        <Avatar  src="/static/images/avatar/1.jpg" />
                    </div>
                </Grid>
            </Grid>
        </div>
            </Toolbar>
        </AppBar>
    </header>
)
}





export default Header
//
// <Link
// to="/"
// style={{
//     color: `white`,
//         textDecoration: `none`,
//         marginRight: `2rem`
// }}
// >
// {siteTitle}
// </Link>
