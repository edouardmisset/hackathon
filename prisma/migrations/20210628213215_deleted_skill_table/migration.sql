/*
  Warnings:

  - You are about to drop the column `skillId` on the `currentskills` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `skillstoacquire` table. All the data in the column will be lost.
  - Added the required column `name` to the `currentSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `skillsToacquire` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `currentskills` DROP FOREIGN KEY `currentskills_ibfk_1`;

-- DropForeignKey
ALTER TABLE `skillstoacquire` DROP FOREIGN KEY `skillstoacquire_ibfk_1`;

-- AlterTable
ALTER TABLE `currentskills` DROP COLUMN `skillId`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `skillstoacquire` DROP COLUMN `skillId`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;
