import React from "react"
import { AppBar, Toolbar } from "@material-ui/core";
// import AcUnitRoundedIcon from "@material-ui/icons/AccessibilityNewSharp";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
        typographyStyles: {
            flex: 1
        },
        Toolbar: {
            background: "primary",
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
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1

            >
                pro-kit blog editor
            </h1>

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
