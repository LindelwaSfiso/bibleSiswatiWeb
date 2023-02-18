import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getVerses} from "../actions/actions";
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useLocation} from "react-router-dom";


/*export class Verses extends React.Component {

    static propTypes = {
        version: PropTypes.string.isRequired,
        book: PropTypes.string.isRequired,
        chapter: PropTypes.number,
        verses: PropTypes.array.isRequired
    }

    componentDidMount() {
        const state = window.location.state

        console.log("GETTING", this.props.version, this.props.book, state)
        this.props.getVerses(this.props.version, this.props.book, this.props.chapter)
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.verses.map(value => {
                        return (
                            <Card variant={"outlined"} key={value.id} sx={{my: 2, background: "#f8f3ed"}}>
                                <CardContent>
                                    <Grid container>
                                        <Grid item sm={1} alignSelf={"center"}>
                                            <Typography variant={"h5"}>
                                                {value.verse_number}
                                            </Typography>
                                        </Grid>

                                        <Grid item sm={true}>
                                            <Typography variant={"h5"}>
                                                {value.verse_text}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Fragment>
        )
    }
}*/

function Verses(props) {
    const {state} = useLocation()

    useEffect(() => {
        if (state !== null) {
            props.getVerses(state.version, state.first_book, 1)
        }
    }, [state])

    return (
        <Fragment>
            {
                props.verses.map(value => {
                    return (
                        <Card variant={"outlined"} key={value.id} sx={{my: 2, background: "#f8f3ed"}}>
                            <CardContent>
                                <Grid container>
                                    <Grid item sm={1} alignSelf={"center"}>
                                        <Typography variant={"h5"}>
                                            {value.verse_number}
                                        </Typography>
                                    </Grid>

                                    <Grid item sm={true}>
                                        <Typography variant={"h5"}>
                                            {value.verse_text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}

Verses.propTypes = {
    version: PropTypes.string.isRequired,
    book: PropTypes.string.isRequired,
    chapter: PropTypes.number,
    verses: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    version: state.bible.version,
    book: state.bible.book,
    chapter: state.bible.chapter,
    verses: state.bible.verses
})

export default connect(mapStateToProps, {getVerses})(Verses);

