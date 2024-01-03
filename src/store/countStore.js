import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 0,
    res:0,
  }

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increement: (state) => {
        state.num+=1;
        state.res+=1;
    },
    decreement: (state,action) => {
        if(state.res>10){
            state.res-= Number(action.payload);
        }
    },
  },
});

const NumScore = configureStore({
  reducer: {
    score: scoreSlice.reducer,
  },
});

export default NumScore;
export const scoreActions = scoreSlice.actions;
