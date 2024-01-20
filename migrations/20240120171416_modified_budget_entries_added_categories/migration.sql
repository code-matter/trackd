-- AlterTable
ALTER TABLE "budget_entries" ADD COLUMN     "categoryId" TEXT;

-- CreateTable
CREATE TABLE "budget_entry_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "color" TEXT DEFAULT '#000',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_entry_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "budget_entries" ADD CONSTRAINT "budget_entries_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "budget_entry_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
