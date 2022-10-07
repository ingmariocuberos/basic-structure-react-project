import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: null
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      return {
        ...state,
        message: action.payload.message
      };
    },
    removeError: () => {
      return initialState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setError, removeError } = errorSlice.actions

export default errorSlice.reducer