CREATE DATABASE IF NOT EXISTS electroscribe_db;
USE electroscribe_db;

CREATE TABLE IF NOT EXISTS conditions (
  icd_10 VARCHAR(5) PRIMARY KEY,
  condition_name VARCHAR(75)
  /*pt_uuid VARCHAR(36)*/
);











