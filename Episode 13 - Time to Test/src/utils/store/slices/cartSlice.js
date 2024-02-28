import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    'name': 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (store, action) => {
            // console.log(store);                  //& Logs proxy object 
            // console.log(current(store));         //& Logs the current state value (object)
            // console.log(action);                 //& Logs the action object which has type and payload keys.

            // In older redux, it used to say that => DON'T MUTATE THE STATE
            // In the older version of redux we used to do something like this
            // Way 1
            /**
            const newState = store;
            newState.items.push(action.payload);
            return newState;
            */

            // Way 2
            /*
            return {
                ...store,
                items: [...store.items, action.payload]
            }
            */

            store.items.push(action.payload)
        },
        removeItem: (store) => {
            store.items.pop()
        },
        clearCart: (store) => {
            store.items.length = 0
        },
    }
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;