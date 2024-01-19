import { NextRequest, NextResponse } from "next/server";

// type ResponseData = {
//   budgetEntries: BudgetEntriesType;
// };

export const POST = async (req: NextRequest) => {
  const res = await req.json();
  return NextResponse.json({ budgetEntries: res });
};
