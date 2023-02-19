import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@graphqlTypes";

export interface CounterState {
  value: Array<Movie>;
}

const initialState: CounterState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavMovie: (state, action: PayloadAction<Movie>) => {
      if (!state.value.find((item) => item.id === action.payload.id)) {
        state.value.push(action.payload);
      }
    },
    removeFavMovie: (state, action: PayloadAction<Movie>) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFavMovie, removeFavMovie } = favoriteSlice.actions;

export default favoriteSlice.reducer;
