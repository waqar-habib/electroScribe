CREATE DATABASE IF NOT EXISTS electroscribe_db;
USE electroscribe_db;

CREATE TABLE IF NOT EXISTS drugs (
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  drug_name VARCHAR(75)
);

