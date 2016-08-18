CREATE DATABASE quests_db3;
USE quests_db3;

CREATE TABLE quests
(
	id int NOT NULL AUTO_INCREMENT,
	task varchar(50) NOT NULL,
    rating int NOT NULL,
    qtype varchar(30) NOT NULL,
    playerID int NOT NULL,
	done BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE players
(
	playerID int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
    mind int NULL,
    phys int NULL,
	soul int NULL,
    level int NULL,
    exp int NULL,
    date TIMESTAMP,
	PRIMARY KEY (playerID)
);