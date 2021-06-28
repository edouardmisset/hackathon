/*
  Warnings:

  - Added the required column `level` to the `currentSkills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `currentskills` ADD COLUMN `level` INTEGER NOT NULL;
