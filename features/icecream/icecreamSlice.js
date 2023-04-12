const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecream: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        order: state => {
            state.numOfIcecream--
        },
        restock: (state, action) => {
            state.numOfIcecream += action.payload
        } 
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions