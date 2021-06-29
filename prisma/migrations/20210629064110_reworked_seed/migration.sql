/*
  Warnings:

  - You are about to drop the column `userRoleId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `currentskills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `currentskills` DROP FOREIGN KEY `currentskills_ibfk_1`;

-- DropForeignKey
ALTER TABLE `currentskills` DROP FOREIGN KEY `currentskills_ibfk_2`;

-- AlterTable
ALTER TABLE `event` MODIFY `image` VARCHAR(255);

-- AlterTable
ALTER TABLE `user` DROP COLUMN `userRoleId`;

-- DropTable
DROP TABLE `currentskills`;

-- CreateTable
CREATE TABLE `currentSkills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `skillId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `currentSkills` ADD FOREIGN KEY (`skillId`) REFERENCES `skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `currentSkills` ADD FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
