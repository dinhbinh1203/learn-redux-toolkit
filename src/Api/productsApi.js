import axiosClient from "./axiosClient";

export const getAllProducts = async () => {
  const url = "/products";
  return await axiosClient.get(url);
};

export const getProductById = async (id) => {
  const url = `/products/${id}`;
  return await axiosClient.get(url);
};

export const deleteProductById = async (id) => {
  const url = `/products/${id}`;
  return await axiosClient.delete(url);
};

export const updateProductById = async (data) => {
  const url = `/products/${data.id}`;
  return await axiosClient.patch(url, data);
};

export const addProduct = async (data) => {
  const url = `/products`;
  return await axiosClient.post(url, data);
};
