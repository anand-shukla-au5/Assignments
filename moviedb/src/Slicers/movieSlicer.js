import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoviesByActor = createAsyncThunk(
    "movie/fetch",
    async (actorName) => {
        if (actorName !== "") {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${actorName}`
            );
            const data = await response.json();
            console.log("Actor namae", data);
            if (data.results.length !== 0) {
                const actorData = data.results[0];
                const actorId = data.results[0].id;
                const moviesResponse = await fetch(
                    `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`
                );
                let moviesData = await moviesResponse.json();
                moviesData = moviesData.cast ? moviesData.cast : [];
                console.log("all moive with that actor", moviesData);
                return { actorData, moviesData };
            } else {
                return false;
            }

        } else {
            return [];
        }
    }
);


export const movieSlicer = createSlice({
    name: 'movies',
    initialState: {
        actorMovieData: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // updateMovieList: (state, action) => {
        //     const newArr = state.MovieList.map((obj) => {
        //         if (obj.id === action.payload.id) {
        //             return { ...obj, ...action.payload };
        //         }
        //         return obj;
        //     });

        //     state.MovieList = [...newArr];
        // },
        // delMovieList: (state, action) => {
        //     state.MovieList.splice(
        //         state.MovieList.findIndex((prod) => prod.id === action.payload),
        //         1
        //     );
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesByActor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMoviesByActor.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.actorMovieData = action.payload;
            })
            .addCase(fetchMoviesByActor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Action creators are generated for each case reducer function
export const {
    setMovieList,
    // updateMovieList, delMovieList
} =
    movieSlicer.actions;

export default movieSlicer.reducer;
