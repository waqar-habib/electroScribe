CREATE DATABASE IF NOT EXISTS electroscribe_db;
USE electroscribe_db;

CREATE TABLE IF NOT EXISTS patients (
	pt_uuid VARCHAR(36) PRIMARY KEY,
    pt_name VARCHAR(20),
    pt_email VARCHAR(50),
    pt_cell VARCHAR(12),
    pt_gender VARCHAR(6),
    pt_dob DATETIME
);

