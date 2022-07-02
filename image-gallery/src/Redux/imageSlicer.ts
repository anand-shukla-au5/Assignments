import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { imageData } from '../Comps/ImageResults'
interface GalleryState {
    arrGallery: Array<imageData> | [],
    serchArr:Array<imageData> | [],
}

const initialState = { arrGallery: [],serchArr: [] } as GalleryState

const counterSlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        defaultImages(state, action: PayloadAction<Array<imageData>>) {
            state.arrGallery = action.payload
        },
        sortByTitle(state, action: PayloadAction<string>){
            let arra = [...state.arrGallery];
            if(action.payload === 'title'){
                arra.sort((img1,img2) => {
                    const nameA = img1.user.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = img2.user.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                    return -1;
                    }
                    if (nameA > nameB) {
                    return 1;
                    }
                    return 0;
                });
                state.arrGallery = arra
            } else if(action.payload === 'size'){
                arra.sort((img1,img2) => {
                    const nameA = img1.width*img1.height;
                    const nameB = img2.width*img2.height;
                    return nameA - nameB;
                });
                state.arrGallery = arra
            } else if(action.payload === 'date'){
                arra.sort((img1,img2) => {
                    const nameA = new Date(img1.created_at).getTime();
                    const nameB = new Date(img2.created_at).getTime();
                    return nameA - nameB 
                });
                state.arrGallery = arra
            }
        }
    },
})

export const { defaultImages,sortByTitle } = counterSlice.actions
export default counterSlice.reducer