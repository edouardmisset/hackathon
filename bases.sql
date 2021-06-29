INSERT INTO `night-fiverr`.`user`
(firstName, lastName, email, avatar, hashedPassword)
VALUES('John', 'Doe', 'john.doe@gmail.com', '', 'azerty');


INSERT INTO `night-fiverr`.tag
(name)
VALUES('Web Design'), ('Word Press'), ('Logo Design'), ('Drop Shipping'), ('Graphic Design'), ('Digital Marketing'), ('Writing'), ('Video and Animation'), ('Music and Audio'), ('Programming'), ('Data'), ('Lifestyle'), ('Business');



INSERT INTO `night-fiverr`.event
(name, description, online, `date`, duration, popularity, image, location, ownerId)
VALUES('First Event', 'blablabla   dgfdgdfg fgfghfhf gdgddsfsdf', 0, CURRENT_TIMESTAMP(3), 30, 0, '', '17 rue Delandine, 69002 Lyon', 1),
('Second Event', 'blablabdfdfdffgla   dggfgdfgfgfggffdgdfg fgfghfhf ggfgfdgfgfggfdgfgdfgdgddsfsdf', 1, CURRENT_TIMESTAMP(3), 30, 0, '', 'zoomzoom', 1);

INSERT INTO `night-fiverr`.currentskills
(name, userId, `level`)
VALUES('JavaScript', 1, 2), ('CSS', 1, 5), ('PHP', 1, 3);
