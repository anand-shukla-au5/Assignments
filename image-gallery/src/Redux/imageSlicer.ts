import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GalleryState {
    arrGallery: Array<{}>,
}

const initialState = { arrGallery: [] } as GalleryState

const counterSlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        defaultImages(state, action: PayloadAction<Array<{}>>) {
            state.arrGallery = action.payload
        },
    },
})

export const { defaultImages } = counterSlice.actions
export default counterSlice.reducer