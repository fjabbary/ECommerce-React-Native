import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    price: number;
    title: string;
    imageURL: string;
    qty: number;
}

interface CartState {
    cartItems: CartItem[]
}

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const foundItem = state.cartItems.find(item => item.id === action.payload.id)
            if (!foundItem) {
                state.cartItems.push({
                    ...action.payload,
                    qty: 1
                })
            } else {
                state.cartItems = state.cartItems.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            }

        },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },

        increaseCartItemQty: (state, action) => {
            state.cartItems = state.cartItems.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
        },

        decreaseCartItemQty: (state, action) => {
            console.log('B')
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload.id && item.qty !== 1) {
                    return { ...item, qty: item.qty - 1 }
                }
                return item;
            })
        }
    }
})

export const { addItemToCart, removeItemFromCart, increaseCartItemQty, decreaseCartItemQty } = cartSlice.actions;

export default cartSlice.reducer;