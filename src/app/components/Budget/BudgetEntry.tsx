"use client";
import React from "react";
import { Button, Form, Input, InputNumber } from "antd";

type Props = {
  refetch: Function;
};
type FieldType = {
  title: string;
  description: string | null;
  amount: number | null;
};

const BudgetEntry = ({ refetch }: Props) => {
  const [form] = Form.useForm();

  const handleSubmit = async ({ title, description, amount }: FieldType) => {
    try {
      await fetch("/api/budget_entry", {
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
    } finally {
      refetch();
      form.resetFields();
    }
  };

  return (
    <div className="budget-entry-form">
      <Form
        form={form}
        name="budget-entry-form"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
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
