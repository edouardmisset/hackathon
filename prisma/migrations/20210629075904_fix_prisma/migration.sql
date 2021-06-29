/*
  Warnings:

  - You are about to drop the column `userRoleId` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `image` VARCHAR(255);

-- AlterTable
ALTER TABLE `user` DROP COLUMN `userRoleId`;
