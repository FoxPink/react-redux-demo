import { createSlice } from "@reduxjs/toolkit";

export const userSlide = createSlice({
  name: "user",
  initialState: {
    name: "DuyNguyen",
    age: "23",
    about: "FoxPink",
    avaUrl:
      "http://clipart-library.com/images_k/chibi-transparent/chibi-transparent-11.png",
    themeColor: "#FF8DC7",
    pending: false,
    error: false,
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { update } = userSlide.actions;
export default userSlide.reducer;
