import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: false,
  },
  reducers: {
    logAction: (state, action) => {
        state.logged = action.payload;
    },
    decrement: (state) => {
        state.value -= 1
    },
    incrementByAmount: (state, action) => {
        state.value += action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { logAction, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer