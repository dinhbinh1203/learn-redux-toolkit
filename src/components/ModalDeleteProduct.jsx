import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productsSlice";

const { confirm } = Modal;

export const ModalDeleteProduct = (product) => {
  const dispatch = useDispatch();
  const item = product.product;
  const showDeleteConfirm = () => {
    confirm({
      title: `Are you sure delete item "${item.name}"?`,
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteProduct(item.id));
      },
    });
  };

  return (
    <Space wrap>
      <Button onClick={showDeleteConfirm} type="dashed">
        Delete
      </Button>
    </Space>
  );
};
