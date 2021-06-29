/*
  Warnings:

  - Added the required column `popularity` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `popularity` INTEGER NOT NULL;
