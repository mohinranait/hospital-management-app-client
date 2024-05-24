const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  isLoading: true,
  isError: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    addUser: (state, action) => {
      state.user = action.payload?.user;
      state.isAuthenticated = action.payload?.isAuthenticated;
      state.isLoading = false;
    },

    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isAuthenticated = payload;
    },
  },
});

export const { addUser, logoutUser, authLoading } = authSlice.actions;

export default authSlice.reducer;
