"use client";
import { BudgetEntriesType, BudgetEntryType } from "@/app/types/Budgets";
import { DeleteOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import BudgetEntry from "./BudgetEntry";
import { Spin } from "antd";

type Props = {};

const BudgetEntries = ({}: Props) => {
  const [budgetEntries, setBudgetEntries] = useState<BudgetEntriesType>([]);
  const [isFetching, setIsFetching] = useState(true);

  const handleDelete = async (id: string) => {
    setIsFetching(true);
    try {
      await fetch(`/api/budget_entry/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    } finally {
      fetchBudgetEntries();
      setIsFetching(false);
    }
  };
  const fetchBudgetEntries = async () => {
    setIsFetching(true);
    try {
      const res = await fetch("/api/budget_entries");
      const { budgetEntries } = await res.json();
      setBudgetEntries(budgetEntries);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchBudgetEntries();

    return () => {
      setBudgetEntries([]);
    };
  }, []);

  return (
    <div>
      <Spin spinning={isFetching}>
        {budgetEntries.map((budgetEntry: BudgetEntryType) => (
          <div
            key={budgetEntry.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              width: 300,
              marginBottom: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <h2>{budgetEntry.title}</h2>
              <h3>{budgetEntry.amount} $</h3>
            </div>

            <DeleteOutlined onClick={() => handleDelete(budgetEntry.id)} />
          </div>
        ))}
      </Spin>
      <BudgetEntry refetch={fetchBudgetEntries} />
    </div>
  );
};

export default BudgetEntries;
