"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select, notification } from "antd";
import { BudgetEntryCategory } from "@prisma/client";
import { BudgetEntryCategoriesType } from "@/app/types/Budgets";

type Props = {
  refetch: Function;
};
type FieldType = {
  title: string;
  description: string | null;
  amount: number | null;
  categoryId: string | null;
};

const BudgetEntry = ({ refetch }: Props) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [categories, setCategories] = useState<BudgetEntryCategoriesType>([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/budget_entry_categories");
      const { budgetEntriesCategories } = await res.json();
      setCategories(budgetEntriesCategories);
    } catch (error) {}
  };

  const handleSubmit = async ({
    title,
    description,
    amount,
    categoryId,
  }: FieldType) => {
    try {
      await fetch("/api/budget_entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          amount,
          categoryId,
        }),
      });
    } catch (error) {
      console.error(error);
      api.error({
        message: "An error occured",
      });
    } finally {
      refetch();
      form.resetFields();
    }
  };

  useEffect(() => {
    fetchCategories();

    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <>
      {contextHolder}
      <div className="budget-entry-form">
        <Form
          form={form}
          name="budget-entry-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item<FieldType> name="description">
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item<FieldType> name="amount">
            <InputNumber placeholder="00.00" />
          </Form.Item>
          <Form.Item<FieldType> name="categoryId">
            <Select
              className="categories"
              options={categories}
              fieldNames={{ label: "name", value: "id" }}
              placeholder="Category"
              allowClear
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default BudgetEntry;
