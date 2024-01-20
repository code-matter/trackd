import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const budgetEntries = await prisma.budgetEntry.findMany({
    // where:{}
    include: {
      author: true,
      category: true,
    },
  });
  return NextResponse.json({ budgetEntries });
};
