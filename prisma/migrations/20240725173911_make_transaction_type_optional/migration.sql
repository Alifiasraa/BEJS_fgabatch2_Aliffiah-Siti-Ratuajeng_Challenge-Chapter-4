-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_transaction_type_id_fkey";

-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "transaction_type_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_transaction_type_id_fkey" FOREIGN KEY ("transaction_type_id") REFERENCES "transaction_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
