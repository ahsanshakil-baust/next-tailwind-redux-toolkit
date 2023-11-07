import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// type InitialState = {
//   name: string;
// };

// or

interface InitialState {
  name: string;
  email: string;
}

// const initialState = {
//   name: "",
// } as InitialState;

const initialState: InitialState = {
  name: "",
  email: "",
};

const auth = createSlice({
  name: "user",
  initialState,
  reducers: {
    submitUser: (state, action: PayloadAction<InitialState>) => {
      state = action.payload;
    },
  },
});

export const { submitUser } = auth.actions;
export default auth.reducer;
