import { useEffect } from "react";
import { Button, Form, Input } from "antd";

const FormItem = Form.Item;
const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

export default function AntdFormPage(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    form.setFieldsValue({ username: "default" });
    console.log("form", form);
  }, []);
  return (
    <div>
      <h3>AntdFormPage</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItem name="username" label="姓名" rules={[nameRules]}>
          <Input placeholder="用户名" />
        </FormItem>
        <FormItem label="密码" name="password" rules={[passwordRules]}>
          <Input.Password placeholder="密码" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}


// antd4 把state存到第三方store（get/set）中
// antd3 把state存到form表单 HOC