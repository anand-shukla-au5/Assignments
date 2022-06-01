import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageSlicer'
const store = configureStore({
    reducer: {
        gallery: imageReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store