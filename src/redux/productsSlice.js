import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
} from "../Api/productsApi";
import { deleteProductById } from "../Api/productsApi";

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

export const patchProduct = createAsyncThunk(
  "products/putProduct",
  async (data) => await updateProductById(data)
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
    detailProduct: undefined,
  },
  reducers: {
    deleteProduct: function (state, { payload }) {
      state.data = state.data.filter((item) => item.id !== payload);
      deleteProductById(payload);
    },
  },
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
      state.data = [...state.data, payload];
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
      state.loading = false;
      state.isSuccess = true;
      state.detailProduct = payload;
    },
    [getProduct.rejected]: (state) => {
      state.loading = false;
      state.isSuccess = false;
    },
    [patchProduct.pending]: (state) => {
      state.loading = true;
    },
    [patchProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.data = state.data.map((item) => {
        if (item.id === payload.id) return payload;
        return item;
      });
    },
    [patchProduct.rejected]: (state) => {
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const { deleteProduct } = productSlice.actions;

const { reducer } = productSlice;
export default reducer;
