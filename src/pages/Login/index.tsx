import { userLoginService } from '@/services/loginService/loginService';
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Layout,
  message,
  Row,
  Space,
  Tabs,
  theme,
  Typography,
} from 'antd';
import React, { CSSProperties, useState } from 'react';
import styles from './index.less';
import { history } from '@umijs/max';

interface Props {
  name: string;
}

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
const onFinish = async (values: API.UserLoginBodyDataType) => {
  const response = await userLoginService(values);

  console.log(response);

  if (response.email !== null) {
    history.push(`/fileUpload`);
  } else {
    history.push(`/register`);
  }
  console.log('response');
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type LoginType = 'phone' | 'account';
const Login: React.FC<Props> = (props) => {
  const { name } = props;

  let loginType;
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
                label="Email" // Change "Username" to "Email"
                name="email"
                className={styles.header}
                rules={[
                  { required: true, message: 'Please input your email!' }, // Update the message as well
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

export default Login;
