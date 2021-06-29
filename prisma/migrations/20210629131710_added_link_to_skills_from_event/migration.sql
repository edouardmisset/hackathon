/*
  Warnings:

  - You are about to drop the column `skillId` on the `currentskills` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `skillstoacquire` table. All the data in the column will be lost.
  - You are about to drop the `skill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `currentSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `skillsToAcquire` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `skillstoacquire` DROP FOREIGN KEY `skillstoacquire_ibfk_1`;

-- DropForeignKey
ALTER TABLE `currentskills` DROP FOREIGN KEY `currentskills_ibfk_1`;

-- AlterTable
ALTER TABLE `currentskills` DROP COLUMN `skillId`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `skillstoacquire` DROP COLUMN `skillId`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatar` VARCHAR(255);

-- DropTable
DROP TABLE `skill`;

-- CreateTable
CREATE TABLE `currentSkillsToEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `skillId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SkillsToAcquireToEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `skillId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `currentSkillsToEvent` ADD FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `currentSkillsToEvent` ADD FOREIGN KEY (`skillId`) REFERENCES `currentSkills`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SkillsToAcquireToEvent` ADD FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SkillsToAcquireToEvent` ADD FOREIGN KEY (`skillId`) REFERENCES `skillsToAcquire`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
