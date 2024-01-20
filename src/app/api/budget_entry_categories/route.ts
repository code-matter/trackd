import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const budgetEntriesCategories = await prisma.budgetEntryCategory.findMany({
    // where:{}
  });
  return NextResponse.json({ budgetEntriesCategories });
};

export const POST = async (req: NextRequest) => {
  const res = await req.json();
  const { name, color } = res;
  await prisma.budgetEntryCategory.create({
    data: { name, color },
  });
  return NextResponse.json({ budgetEntryCategory: res });
};
