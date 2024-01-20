import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const res = await req.json();
  const { title, description, amount, authorId } = res;
  await prisma.budgetEntry.create({
    data: { title, description, amount, authorId },
  });
  return NextResponse.json({ budgetEntries: res });
};
