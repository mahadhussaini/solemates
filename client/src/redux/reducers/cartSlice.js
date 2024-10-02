import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUserCart = createAsyncThunk(
  "cart/createUserCart",
  async ({ products, _id }, { getState, rejectWithValue }) => {
    try {
      const userToken = localStorage.getItem("userToken")
        ? localStorage.getItem("userToken")
        : null;

      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken,
        },
      };

      let res = await axios.get(`/api/cart/${_id}`, config);

      if (res.data === null) {
        await axios.post(`/api/cart/`, { products, _id }, config);
      } else {
      }
      return res.data.products;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserCart = createAsyncThunk(
  "cart/updateUserCart",
  async ({ products, _id }, { getState, rejectWithValue }) => {
    try {
      const userToken = localStorage.getItem("userToken")
        ? localStorage.getItem("userToken")
        : null;
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken,
        },
      };
      await axios.get(`/api/cart/${_id}`, config);
      let res = await axios.put(`/api/cart/${_id}`, { products }, config);
      let data = res.data;
      return data.products;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    quantity: 0,
    total: 0,
    itemTotal: 0,
    cartItems: [],
    amountTotal: 0,
    loading: false,
    error: false,
    success: false,
    errMsg: "",
    userCartItems: [],
  },
  reducers: {
    cartDisplay: (state, action) => {
      state.showCart = action.payload;
    },
    quantityCount: (state, action) => {
      switch (action.payload) {
        case "":
          state.quantity = 0;
          break;
        case "decrease":
          state.quantity = Math.max(state.quantity - 1, 0);
          break;
        case "increase":
          state.quantity = Math.min(state.quantity + 1, 100);
          break;
        default:
          state.quantity = Math.min(parseInt(action.payload), 100);
          break;
      }
    },
    addToCart: (state, action) => {
      state.quantity = state.quantity < 1 ? 1 : state.quantity;

      if (
        state.cartItems
          .map((item) => item.id)
          .includes(action.payload.product._id)
      ) {
        for (let i = 0; i < state.cartItems.length; i++) {
          if (state.cartItems[i].id === action.payload.product._id) {
            state.cartItems[i].quantity += state.quantity;
            state.cartItems[i].itemTotal +=
              action.payload.product.discountPrice * state.quantity;
          }
        }
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            id: action.payload.product._id,
            product: action.payload.product,
            quantity: action.payload.quantity
              ? action.payload.quantity
              : state.quantity,
            itemTotal:
              action.payload.product.discountPrice *
              (action.payload.quantity
                ? action.payload.quantity
                : state.quantity),
          },
        ];
      }
    },
    deleteItem: (state, action) => {
      for (let i = 0; i < state.cartItems.length; i++) {
        if (
          state.cartItems[i].product.title.toLowerCase() ===
          action.payload.toLowerCase()
        ) {
          state.cartItems = state.cartItems.filter(
            (item) =>
              item.product.title.toLowerCase() !== action.payload.toLowerCase()
          );
        }
      }
    },
    setTotals: (state, action) => {
      state.total = state.cartItems
        .map((item) => item.quantity)
        .reduce((a, b) => a + b, 0);
      state.amountTotal = state.cartItems
        .map((item) => item.itemTotal)
        .reduce((a, b) => a + b, 0);
    },
    emptyCartOnLogoout: (state, action) => {
      state.cartItems = [];
      state.userCartItems = [];
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
      state.userCartItems = [];
    },
  },
  extraReducers: {
    [createUserCart.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createUserCart.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.errMsg = "";
      state.userCartItems = payload;
    },
    [createUserCart.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errMsg = payload.msg ? payload.msg : payload;
    },
    [updateUserCart.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateUserCart.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userCartItems = payload;
      state.errMsg = "";
    },
    [updateUserCart.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errMsg = payload.msg ? payload.msg : payload;
    },
  },
});

export const {
  cartDisplay,
  addToCart,
  quantityCount,
  deleteItem,
  setTotals,
  emptyCartOnLogoout,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
