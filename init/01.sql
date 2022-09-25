CREATE DATABASE IF NOT EXISTS `first_database`;
GRANT ALL ON `first_database`.* TO 'user'@'%';

CREATE DATABASE IF NOT EXISTS `second_database`;
GRANT ALL ON `second_database`.* TO 'user'@'%';

GRANT SUPER ON *. * TO 'user'@'%'
