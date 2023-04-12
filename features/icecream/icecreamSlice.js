const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIcecream--;
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
//   extraReducers: {
//     ["cake/order"]: (state) => {
//       state.numOfIcecream--;
//     },
//   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.order, (state) => {
        state.numOfIcecream--
    })
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
