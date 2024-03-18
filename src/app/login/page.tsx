"use client";

import {
  Col,
  Row,
  Typography,
  Button,
  Checkbox,
  Form,
  Input,
  Image,
} from "antd";
import React from "react";
import Title from "antd/es/typography/Title";

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row align="middle" justify="center">
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={12}
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src="/images/loginCooking.svg"
            alt=""
            preview={false}
            height={100}
          />
          <Title level={2} style={{ textAlign: "center" }}>
            Login
          </Title>
          <Form
            name="loginForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<FieldType>
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
