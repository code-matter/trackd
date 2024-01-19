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
          <div>
            <h2>{budgetEntry.title}</h2>
            <h4>{budgetEntry.amount} $</h4>
          </div>
          <div>by {budgetEntry.author?.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BudgetEntries;
