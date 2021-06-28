/*
  Warnings:

  - You are about to drop the column `eventTypeId` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `eventtype` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `eventType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagId` to the `eventType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_ibfk_1`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `eventTypeId`,
    ADD COLUMN `tagId` INTEGER;

-- AlterTable
ALTER TABLE `eventtype` DROP COLUMN `name`,
    ADD COLUMN `eventId` INTEGER NOT NULL,
    ADD COLUMN `tagId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `eventType` ADD FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eventType` ADD FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
