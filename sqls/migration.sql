CREATE DATABASE IF NOT EXISTS do_a_kickflip;

\c do_a_kickflip

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(15) NOT NULL CHECK (CHAR_LENGTH(password) > 6 AND CHAR_LENGTH(password) < 15)
);

CREATE TABLE IF NOT EXISTS friends (
    fl_id SERIAL PRIMARY KEY,
    FOREIGN KEY requestee_id INTEGER REFERENCES users (user_id),
    FOREIGN KEY acceptee_id INTEGER REFERENCES users (user_id),
    CHECK (requestee_id <> acceptee_id)
);

CREATE TABLE IF NOT EXISTS us_locations (
    location_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    city VARCHAR(255) NOT NULL,
    state CHAR(2) NOT NULL CHECK (CHAR_LENGTH(state) = 2),
    zipcode NUMERIC(5, 0) NOT NULL CHECK (LENGTH(zipcode) = 5)
);

CREATE TABLE IF NOT EXISTS favorites (
    favorites_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id),
    location_id INTEGER REFERENCES us_locations (location_id)
);