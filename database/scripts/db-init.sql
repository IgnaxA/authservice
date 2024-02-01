CREATE DATABASE auth_service;

\c auth_service;

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    user_email VARCHAR (60) UNIQUE NOT NULL,
    user_password VARCHAR (60) NOT NULL,
    user_token VARCHAR (250) NOT NULL
);