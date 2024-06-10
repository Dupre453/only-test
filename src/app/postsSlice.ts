import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IPost} from "../models/models";

interface PostsState {
    currentPage: number;
    dates: { [key: number]: [number, number] };
}

const initialState: PostsState = {
    currentPage: 1,
    dates: {
        1: [2015, 2019],
        2: [1987, 1990],
        3: [2010, 2014],
        4: [1926, 1930],
        5: [2000, 2004],
        6: [2020, 2024]
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
    },
}});

export const { setCurrentPage } = postsSlice.actions;
export default postsSlice.reducer