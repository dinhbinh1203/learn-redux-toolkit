import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../Api/productsApi";
import { deleteProductById } from "../Api/productsApi";
import { addProduct } from "../Api/productsApi";

export const getListProducts = createAsyncThunk(
  "products/getListProducts",
  getAllProducts
);

export const addProductToList = createAsyncThunk(
  "products/addProduct",
  async data  => await addProduct(data)
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

      state.loading = false;
      state.isSuccess = true;
    },
    [addProductToList.rejected]: (state) => {
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
