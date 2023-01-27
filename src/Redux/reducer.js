import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    // initialState---------
    cartItem: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    // reducers----
    addtoCart: (state, action) => {
      const item = action.payload;
      // state.cartItem.push(item)
      const isItemExist = state.cartItem.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.cartItem.push(item);
      }
    },
    increment: (state, action) => {
        const item = state.cartItem.find((i) => i.id === action.payload);
        if (item) {
            item.quantity += 1;
       }
        //     state.cartItem.forEach(i => {
        //         if (i.id === item.id) i.quantity += 1;
        //    })
        
      },
      decrement: (state, action) => {
          const item = state.cartItem.find((i) => i.id === action.payload);
    //       if (item.quantity>1) {
    //         item.quantity -= 1;
    //    }
          if(item.quantity>1)
            state.cartItem.forEach(i => {
                if (i.id === item.id) item.quantity -= 1;
           })
    },
    deleteFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
    },
    Price: (state, action) => {
      let sum = 0;
      state.cartItem.forEach((i) => (sum += i.price * i.quantity));
      state.subtotal = sum;
      state.shipping = state.subtotal > 1000 ? 0 : 200;
      state.tax = +(state.subtotal * 0.18).toFixed();
      state.total = state.subtotal + state.shipping + state.tax;
    },
  }
);
