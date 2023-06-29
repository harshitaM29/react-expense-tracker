import { createSlice } from '@reduxjs/toolkit';

const initialThemeState = { isClicked: false, };

const themeSlice = createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers: {
        buttonClicked(state) {
            state.isClicked = true;
        },
        toggle(state) {
            state.isClicked = !state.isClicked;
        }
    }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;