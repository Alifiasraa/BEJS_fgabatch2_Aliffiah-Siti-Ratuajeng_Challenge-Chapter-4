/*
  Warnings:

  - You are about to drop the column `account_id` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `destination_account` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `destination_account_id` to the `transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source_account_id` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_account_id_fkey";

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "account_id",
DROP COLUMN "destination_account",
ADD COLUMN     "destination_account_id" TEXT NOT NULL,
ADD COLUMN     "source_account_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_source_account_id_fkey" FOREIGN KEY ("source_account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_destination_account_id_fkey" FOREIGN KEY ("destination_account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
