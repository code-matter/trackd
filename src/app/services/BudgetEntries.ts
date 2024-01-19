import { BudgetEntry } from "@prisma/client";
import prisma from "../lib/prisma";

export const getBudgetEntries = async () => {
  const budgetEntries = await prisma.budgetEntry.findMany({
    // where:{}
    include: {
      author: true, //{ select: { name: true } },
    },
  });

  return budgetEntries;
};

export const createBudgetEntry = async (entry: BudgetEntry) => {
  await prisma.budgetEntry.create({ data: entry });
};
