/*
  Warnings:

  - You are about to drop the `favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usertoevent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userrole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `favorite_ibfk_1`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `favorite_ibfk_2`;

-- DropForeignKey
ALTER TABLE `usertoevent` DROP FOREIGN KEY `usertoevent_ibfk_1`;

-- DropForeignKey
ALTER TABLE `usertoevent` DROP FOREIGN KEY `usertoevent_ibfk_2`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_ibfk_1`;

-- AlterTable
ALTER TABLE `event` ADD COLUMN `ownerId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `favorite`;

-- DropTable
DROP TABLE `usertoevent`;

-- DropTable
DROP TABLE `userrole`;

-- CreateTable
CREATE TABLE `userRegisteredToEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userRegisteredToEvent` ADD FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userRegisteredToEvent` ADD FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event` ADD FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
