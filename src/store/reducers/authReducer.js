import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: null,
  email: null,
  uid: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInAction: (state, {payload}) => {
      return {
        ...state,
        ...payload
      };
    },
    logOutAction: () =>{
      return initialState;
    },
    registerAction: (state, action) =>{
      state.logged = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { logInAction, logOutAction, incrementByAmount } = authSlice.actions

export default authSlice.reducer