/*
  Warnings:

  - You are about to drop the column `skillId` on the `currentSkills` table. All the data in the column will be lost.
  - You are about to drop the `skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `skillsToacquire` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `currentSkills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `skillsToacquire` DROP FOREIGN KEY `skillsToacquire_ibfk_1`;

-- DropForeignKey
ALTER TABLE `skillsToacquire` DROP FOREIGN KEY `skillsToacquire_ibfk_2`;

-- DropForeignKey
ALTER TABLE `currentSkills` DROP FOREIGN KEY `currentSkills_ibfk_1`;

-- AlterTable
ALTER TABLE `currentSkills` DROP COLUMN `skillId`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatar` VARCHAR(255);

-- DropTable
DROP TABLE `skill`;

-- DropTable
DROP TABLE `skillsToacquire`;

-- CreateTable
CREATE TABLE `skillsToAcquire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `skillsToAcquire` ADD FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
