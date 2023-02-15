import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListProducts } from "../redux/productsSlice";
import { useSelector } from "react-redux";
import React from "react";
import { Spin, Space, Table, Button } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Prev Price",
    dataIndex: "prevPrice",
    key: "prevPrice",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      );
    },
  },
];

export const Products = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state);

  console.log("listProducts 1", listProduct);

  useEffect(() => {
    dispatch(getListProducts());
  }, []);

  return (
    <div>
      {listProduct.products.isSuccess ? (
        <Table columns={columns} dataSource={listProduct.products.data} />
      ) : (
        <Spin />
      )}
    </div>
  );
};
