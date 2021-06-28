/*
  Warnings:

  - You are about to drop the column `meetingLink` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `tagId` on the `event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `meetingLink`,
    DROP COLUMN `tagId`;
