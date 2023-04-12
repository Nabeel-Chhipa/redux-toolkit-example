const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/icecream/icecreamSlice").iceCreamActions;

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(cakeActions.order());
store.dispatch(cakeActions.order());
store.dispatch(cakeActions.order());
store.dispatch(cakeActions.restock(3));

store.dispatch(iceCreamActions.order());
store.dispatch(iceCreamActions.order());
store.dispatch(iceCreamActions.restock(2));

unsubscribe();