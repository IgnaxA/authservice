CREATE DATABASE auth_service;

\c auth_service;

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    user_email VARCHAR (40) UNIQUE NOT NULL,
    user_password VARCHAR (100) NOT NULL,
    user_access_level SMALLINT NOT NULL
);