"use client";
import React from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";

type Props = {};
type FieldType = {
  title: string;
  description: string | null;
  amount: number | null;
};

const BudgetEntry = (props: Props) => {
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = async ({ title, description, amount }: FieldType) => {
    try {
      await fetch("/api/new-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          amount,
          authorId: "clrl4owzs00001462b3ck1afk",
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="budget-entry-form">
      <Form
        name="budget-entry-form"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Description" name="description">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> name="amount">
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BudgetEntry;
