CREATE DATABASE IF NOT EXISTS electroscribe_db;
USE electroscribe_db;

CREATE TABLE IF NOT EXISTS providers (
	provider_uuid VARCHAR(36) PRIMARY KEY,
    provider_name VARCHAR(20),
    provider_email VARCHAR(70),
    provider_speciality VARCHAR(50)
);



