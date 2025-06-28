import { combineReducers } from "redux";

import booksReducer from './books/books-reducer';


const rootReducer = combineReducers({
    posts: booksReducer,
   
});

export default rootReducer;
