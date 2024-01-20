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

export const GET = async (request: NextRequest, { params }: any) => {
  const id = params.id;

  const budgetEntry = await prisma.budgetEntry.findUnique({
    where: { id },
  });
  return NextResponse.json(budgetEntry);
};

// export const PATCH = async (request: NextRequest, { params }: any) => {
//   const id = params.id;

//   const budgetEntry = await prisma.budgetEntry.update({
//     where: { id },
//     data: request.body,
//   });
//   return NextResponse.json(budgetEntry);
// };
