const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfIcecream: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    order: state => {
      state.numOfIcecream--
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.order, (state) => {
      state.numOfIcecream--
    })
  }
})

module.exports = icecreamSlice.reducer
module.exports.iceCreamActions = icecreamSlice.actions