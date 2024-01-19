import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest, { params }: any) => {
  const id = params.id;
  console.log({ id });
  const budgetEntry = await prisma.budgetEntry.delete({
    where: { id },
  });
  return NextResponse.json(budgetEntry);
};
