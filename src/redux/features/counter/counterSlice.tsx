import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  count: 0
}


const counterSlice = createSlice({
  name: "conter",
  initialState,
  reducers: {
    increment: (state, action)=>{ /// ei increment er pura take actions bole
      state.count = state.count + action.payload;
    },
    dicrement: (state)=>{ /// ei dicrement er pura take o actions bole
      state.count = state.count - 1
    }
  }
})

export const {increment, dicrement} = counterSlice.actions;
export default counterSlice.reducer;