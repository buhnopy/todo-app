show databases;
use kdt;

CREATE TABLE todo (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);
INSERT INTO todo VALUES (null, 'mytodo1', 0);
INSERT INTO todo VALUES (null, 'mytodo2', 1);
INSERT INTO todo VALUES (null, 'mytodo3', 1);
INSERT INTO todo VALUES (null, 'mytodo4', 0);
INSERT INTO todo VALUES (null, 'mytodo5', 1);
INSERT INTO todo VALUES (null, 'mytodo6', 0);