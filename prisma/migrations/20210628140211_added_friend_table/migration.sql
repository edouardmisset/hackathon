-- CreateTable
CREATE TABLE `friend` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `currentUserId` INTEGER NOT NULL,
    `friendId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friend` ADD FOREIGN KEY (`currentUserId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend` ADD FOREIGN KEY (`friendId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
