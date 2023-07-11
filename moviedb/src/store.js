import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './Slicers/movieSlicer'
export const store = configureStore({
    reducer: {
        movieReducer,
    },
})