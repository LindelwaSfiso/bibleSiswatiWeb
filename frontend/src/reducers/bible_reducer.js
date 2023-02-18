import {GET_ASV, GET_VERSES, SET_BOOK, SET_BOOKS, SET_CHAPTER, SET_CHAPTERS, SET_VERSION, GET_VERSE_OF_THE_DAY} from "../actions/types"

const initialState = {
    asv_bible: [],
    verses: [],
    version: 'siswati',
    versions: [],
    books: [],
    book: 'genesisi',
    chapters: 1,
    chapter: 1,
    verse_of_the_day: {}
}

export default function (state = initialState, action) {
    console.log("RUNNING", action.type)
    switch (action.type) {
        case SET_VERSION:
            return {
                ...state,
                version: action.payload
            }
        case GET_ASV:
            return {
                ...state,
                asv_bible: action.payload
            }
        case GET_VERSES:
            return {
                ...state,
                verses: action.payload
            }
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case SET_BOOK:
            return {
                ...state,
                book: action.payload
            }
        case SET_CHAPTERS:
            return {
                ...state,
                chapters: action.payload
            }
        case SET_CHAPTER:
            return {
                ...state,
                chapter: action.payload
            }
        case GET_VERSE_OF_THE_DAY:
            return {
                ...state,
                verse_of_the_day: action.payload
            }
        default:
            return state
    }
}