import { createSlice } from "@reduxjs/toolkit";

export const userSlide = createSlice({
  name: "user",
  initialState: {
    name: "DuyNguyen",
    age: "23",
    about: "FoxPink",
    avaUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-chibi-buon-dep-nhat-629x600.jpg",
    themeColor: "#852999",
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
