"use client";

import prisma from "@/app/lib/prisma";
import { BudgetEntriesType, BudgetEntryType } from "@/app/types/Budgets";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

type Props = {
  budgetEntries: BudgetEntriesType;
};

const BudgetEntries = ({ budgetEntries }: Props) => {
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/budget_entry/${id}`, {
        method: "DELETE",
      });
    } catch (error) {}
  };
  return (
    <div>
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
    </div>
  );
};

export default BudgetEntries;
