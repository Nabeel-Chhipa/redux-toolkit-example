const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})

store.dispatch(cakeActions.orderCake())
store.dispatch(cakeActions.orderCake())
store.dispatch(cakeActions.orderCake())
store.dispatch(cakeActions.restockCake(3))

unsubscribe()