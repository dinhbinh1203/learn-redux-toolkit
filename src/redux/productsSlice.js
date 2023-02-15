import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, addProduct, getProductById } from "../Api/productsApi";

export const getListProducts = createAsyncThunk(
  "products/getListProducts",
  getAllProducts
);

export const addProductToList = createAsyncThunk(
  "products/addProductToList",
  async (data) => await addProduct(data)
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => await getProductById(id)
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getListProducts.pending]: (state) => {
      state.loading = true;
    },
    [getListProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getListProducts.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [addProductToList.pending]: (state) => {
      state.loading = true;
    },
    [addProductToList.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      console.log("state.data", state.data);
      state.data = [...state.data, payload]
      state.loading = false;
      state.isSuccess = true;
    },
    [addProductToList.rejected]: (state) => {
      state.loading = false;
      state.isSuccess = false;
    },
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);

      state.loading = false;
      state.isSuccess = true;
    },
    [getProduct.rejected]: (state) => {
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
