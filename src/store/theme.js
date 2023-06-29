import { createSlice } from '@reduxjs/toolkit';

const initialThemeState = { isClicked: false,isChange:false};

const themeSlice = createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers: {
        buttonClicked(state) {
            state.isClicked = true;
            state.isChange = true
        },
        toggle(state) {
            
            state.isChange = !state.isChange;
            
        }
    }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;