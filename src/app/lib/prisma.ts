import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

switch (process.env.NODE_ENV) {
  case "production":
    prisma = new PrismaClient();
    break;
  // To validate
  //   case "development":
  //     prisma = new PrismaClient();
  //     break;
  default:
    (global as any).prisma = new PrismaClient();
    prisma = (global as any).prisma;
    break;
}

export default prisma;
