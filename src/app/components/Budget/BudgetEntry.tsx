import { BudgetEntriesType, BudgetEntryType } from "@/app/types/Budgets";
import React from "react";

type Props = {
  budgetEntries: BudgetEntriesType;
};

const BudgetEntries = ({ budgetEntries }: Props) => {
  return (
    <div>
      {budgetEntries.map((budgetEntry: BudgetEntryType) => (
        <div key={budgetEntry.id}>
          <h2>{budgetEntry.title}</h2>
          <div>by {budgetEntry.author?.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BudgetEntries;
