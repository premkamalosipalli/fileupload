import { userLoginService } from '@/services/loginService/loginService';
import { Button, Checkbox, Form, Input, Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

interface Props {
  name: string;
}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const onFinish = async (values: API.UserLoginBodyDataType) => {
  const loginResponse = await userLoginService(values);

  console.log(loginResponse);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          Welcome <strong>{name}</strong> ！<br></br>
          <br></br>
          <div className={styles.header}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
