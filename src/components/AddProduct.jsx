import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { addProductToList } from "../redux/productsSlice";


const AddProduct = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(addProductToList(values))
    form.resetFields(["name-product", "price", "prev-price"]);
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name Product"
        name="name-product"
        rules={
          [
            // {
            //   required: true,
            //   message: "Please input name of Product!",
            // },
          ]
        }
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        type="number"
        rules={[
          {
            required: true,
            message: "Please input price of product!",
          },
          {
            pattern: new RegExp(/^[0-9]+$/),
            message: "Please input number",
          },
          {
            min: 0,
            message: "please enter a number not less than 0",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Prev Price"
        name="prev-price"
        rules={[
          {
            pattern: new RegExp(/^[0-9]+$/),
            message: "Please input number",
          },
          {
            min: 0,
            message: "please enter a number not less than 0",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddProduct;
