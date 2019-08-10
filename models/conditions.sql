CREATE DATABASE IF NOT EXISTS electroscribe_db;
USE electroscribe_db;

CREATE TABLE IF NOT EXISTS conditions (
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  icd_10 VARCHAR(5),
  condition_name VARCHAR(75)
);











