import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@graphqlTypes';

export interface CounterState {
  value: Movie[];
}

const initialState: CounterState = {
  value: [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishMovie: (state, action: PayloadAction<Movie>) => {
      if (!state.value.find((item) => item.id === action.payload.id)) {
        state.value.push(action.payload);
      }
    },
    removeWishMovie: (state, action: PayloadAction<Movie>) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addWishMovie, removeWishMovie } = wishListSlice.actions;

export default wishListSlice.reducer;
