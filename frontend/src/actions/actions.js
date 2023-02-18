import axios from "axios";
import {
    GET_ASV,
    GET_BBE,
    SET_BOOKS, SET_CHAPTERS, SET_BOOK, SET_CHAPTER, GET_VERSES, SET_VERSION,
    GET_VERSE_OF_THE_DAY
} from "./types";
import {ENGLISH_BOOKS, SISWATI_BOOKS, SIZULU_BOOKS} from "../components/bible_data";

// Get verses given version, book, and chapter
export const getVerses = (version, book, chapter) => dispatch => {
    axios.get(`/api/${version}/${book}/${chapter}`)
        .then(r => {
            dispatch({
                type: GET_VERSES,
                payload: r.data
            })
        }).catch(err => console.log(err));
}


// GET ASV
export const getAsv = () => dispatch => {
    axios.get('/api/asv/genesis/1/')
        .then(r => {
            dispatch({
                type: GET_ASV,
                payload: r.data
            })
        }).catch(err => console.log(err));
}

// GET BBE
export const getBbe = (book, chapter) => dispatch => {
    axios.get(`/api/bbe/${book}/${chapter}/`)
        .then(r => {
            dispatch({
                type: GET_BBE,
                payload: r.data
            })
        }).catch(err => console.log(err));
}

export const getVerseOfTheDay = () => dispatch => {
    axios.get('/api/verse_of_the_day/')
        .then(response => {
            dispatch({
                type: GET_VERSE_OF_THE_DAY,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
}


export const setVersion = (version) => dispatch => {
    dispatch({
        type: SET_VERSION,
        payload: version
    })
}

export const setBooks = (version) => dispatch => {
    let payload, book, num_of_chapters;

    dispatch(setVersion(version))

    switch (version) {
        case 'siswati':
            payload = Object.keys(SISWATI_BOOKS)
            book = payload[0]
            num_of_chapters = SISWATI_BOOKS[book]
            break
        case 'zulu':
            payload = Object.keys(SIZULU_BOOKS)
            book = payload[0]
            num_of_chapters = SIZULU_BOOKS[book]
            break
        default:
            payload = Object.keys(ENGLISH_BOOKS)
            book = payload[0]
            num_of_chapters = ENGLISH_BOOKS[book]
            break
    }

    dispatch(setBook(book))
    dispatch(setChapters(num_of_chapters))
    dispatch(setChapter(1))

    dispatch({
        type: SET_BOOKS,
        payload: payload
    })
}

export const setBook = (book, version = null) => dispatch => {
    if (version !== null) {
        dispatch(setChapters(getNumberOfChapter(version, book)))
        dispatch(setChapter(1))
    }

    dispatch({
        type: SET_BOOK,
        payload: book
    })
}


export const setChapters = (chapters) => dispatch => {
    dispatch({
        type: SET_CHAPTERS,
        payload: chapters
    })
}

export const setChapter = (chapter) => dispatch => {
    dispatch({
        type: SET_CHAPTER,
        payload: chapter
    })
}

function getNumberOfChapter(version, book) {
    switch (version) {
        case 'siswati':
            return SISWATI_BOOKS[book]
        case 'zulu':
            return SIZULU_BOOKS[book]
        default:
            return ENGLISH_BOOKS[book]
    }
}



