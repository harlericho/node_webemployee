CREATE DATABASE db_webemployee;
USE db_webemployee;
CREATE TABLE employee(
 id int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 names varchar(50) NOT NULL,
 address text NULL,
 phone varchar(10) NOT NULL,
 created_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updated_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);