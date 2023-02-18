import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getVerseOfTheDay} from "../actions/actions";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Paper from "@mui/material/Paper";

const verseOfTheDayTheme = createTheme({
    typography: {
        fontFamily: "Orelega One, Arial",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Orelega One';
                    fonts-style: normal;
                    font-display: swap;
                    font-weight: 400;
                    src: local('Orelega One'), local('Orelega-One-Regular'), url('../fonts/orelega_one_regular.ttf') format(ttf);   
                }
            `,
        },
    },
});

export class VerseOfTheDay extends Component {

    static propTypes = {
        verse_of_the_day: PropTypes.object.isRequired,
        getVerseOfTheDay: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getVerseOfTheDay()
    }

    render() {
        return (
            <Paper variant={"outlined"} sx={{p: 3}}>
                <Typography color="primary" style={{fontWeight: "bold"}}>Verse of the Day: </Typography>

                    <Typography align={"center"} textAlign={"center"} variant={"h6"} color="gray" sx={{mt: 1}}>
                        " {this.props.verse_of_the_day.verse_text} "
                    </Typography>
            </Paper>
        )
    };
}

const mapStateToProps = state => ({
    verse_of_the_day: state.bible.verse_of_the_day
})


export default connect(mapStateToProps, {getVerseOfTheDay})(VerseOfTheDay)

