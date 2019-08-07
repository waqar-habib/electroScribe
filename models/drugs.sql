CREATE DATABASE IF NOT EXISTS electroscribe_db;
USE electroscribe_db;

CREATE TABLE IF NOT EXISTS drugs (
  drug_uuid VARCHAR(36) PRIMARY KEY,
  drug_name VARCHAR(75),
  condition_name VARCHAR(75),
  icd_10 VARCHAR(5) 
);

