import { BudgetEntryCategory, Prisma } from "@prisma/client";

export type BudgetEntryType = Prisma.BudgetEntryGetPayload<{
  include: { author: true; category: true };
}>;
export type BudgetEntriesType = BudgetEntryType[];

export type BudgetEntryCategoriesType = BudgetEntryCategory[];
