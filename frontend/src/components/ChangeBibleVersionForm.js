import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem, Select
} from "@mui/material";
import React from "react";
import {availableVersions} from "./bible_data";
import {connect} from "react-redux";
import {getVerses, setBook, setBooks, setChapter, setChapters, setVersion} from "../actions/actions";
import PropTypes from "prop-types";

export class ChangeBibleVersionForm extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        book: PropTypes.string.isRequired,
        setBooks: PropTypes.func.isRequired,
        setBook: PropTypes.func.isRequired,
        chapters: PropTypes.number.isRequired,
        chapter: PropTypes.number.isRequired,
        setChapter: PropTypes.func.isRequired,
        getVerses: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            version: window.location.pathname.replaceAll('/', ''),
        }

        this.changeVersion = this.changeVersion.bind(this)
        this.changeBook = this.changeBook.bind(this)
    }

    changeVersion = (version) => {
        const _version = version.target.value
        this.props.setBooks(_version)

        this.setState({
            version: _version
        })
    }

    changeBook = (book) => {
        this.props.setBook(book.target.value, this.state.version)
    }

    changeChapter = (chapter) => {
        this.props.setChapter(chapter.target.value)
    }

    onButtonClick = () => {
        console.log(this.state.version, this.props.book, this.props.chapter)
        return this.props.getVerses(this.state.version, this.props.book, this.props.chapter)
    }

    componentDidMount() {
        this.props.setBooks(this.state.version)
    }

    render() {
        let BOOKS_COMPONENT = <FormControl fullWidth variant={"outlined"} margin={"normal"}>
            <InputLabel id="bookName">Book</InputLabel>
            <Select labelId="bookName" label={"Book"} variant={"outlined"} value={this.props.book}
                    onChange={this.changeBook}>
                {
                    this.props.books.map((value, index) => {
                        return (
                            <MenuItem value={value} key={index}>{value}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>

        let chapters_ = []
        for(let i=1; i<=this.props.chapters; i++) {
            chapters_.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
        }

        return (
            <form >
                <Grid container columnSpacing={1} sx={{position:'sticky', top:0}}>
                    <Grid item sm={12} md={3} sx={{width: "inherit"}}>
                        {/*<TextField variant={"outlined"} label={"Username"} name={"username"} fullWidth margin={"normal"}/>*/}
                        <FormControl fullWidth variant={"outlined"} margin={"normal"}>
                            <InputLabel id={"version"}>Version</InputLabel>
                            <Select labelId={"version"} label={"Version"} variant={"outlined"}
                                    value={this.state.version}
                                    onChange={this.changeVersion}>
                                {
                                    availableVersions.map((value, index) => {
                                        return (
                                            <MenuItem value={value.short} key={index}>{value.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item sm={12} md={3} sx={{width: "inherit"}}>
                        {BOOKS_COMPONENT}
                    </Grid>

                    <Grid item sm={12} md={3} sx={{width: "inherit"}}>
                        <FormControl fullWidth variant={"outlined"} margin={"normal"}>
                            <InputLabel id="chapter">Chapter</InputLabel>
                            <Select labelId="chapter" label={"Chapter"} variant={"outlined"} value={this.props.chapter}
                                    onChange={this.changeChapter}>
                                {chapters_}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item sm={12} md={3} sx={{width: "inherit"}} alignSelf={"center"}>
                        <Button
                            fullWidth variant={"contained"}
                            margin={"normal"} sx={{mt: "6px", p: "15px"}} onClick={this.onButtonClick}>Get</Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    books: state.bible.books,
    book: state.bible.book,
    chapters: state.bible.chapters,
    chapter: state.bible.chapter
})

export default connect(mapStateToProps, {setBooks, setBook, setChapters, setChapter, getVerses})(ChangeBibleVersionForm);

