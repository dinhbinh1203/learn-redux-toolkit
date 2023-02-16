import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space, Table, Card } from "antd";
import { ModalDeleteProduct } from "./ModalDeleteProduct";
import ModalAddEditProduct from "./ModalAddEditProduct";
import { getListProducts } from "../redux/productsSlice";

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
          <ModalDeleteProduct product={record} />
          <ModalAddEditProduct product={record} />
        </Space>
      );
    },
  },
];

export const Products = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state);

  const newData = listProduct.products.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  useEffect(() => {
    dispatch(getListProducts());
  }, []);

  return (
    <div>
      <Card title="Dashboard" bordered={false} extra={<ModalAddEditProduct />}>
        <div>
          {listProduct.products.isSuccess ? (
            <Table columns={columns} dataSource={newData} />
          ) : (
            <Spin />
          )}
        </div>
      </Card>
    </div>
  );
};
