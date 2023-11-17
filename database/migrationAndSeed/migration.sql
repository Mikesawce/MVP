CREATE DATABASE do_a_kickflip;

\c do_a_kickflip

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(15) NOT NULL CHECK (CHAR_LENGTH(password) > 6 AND CHAR_LENGTH(password) < 15)
);

CREATE TABLE friends (
    fl_id SERIAL PRIMARY KEY,
    requestee_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
    acceptee_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
    CHECK (requestee_id <> acceptee_id)
);

CREATE TABLE us_locations (
    location_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    city VARCHAR(255) NOT NULL,
    state CHAR(2) NOT NULL CHECK (CHAR_LENGTH(state) = 2),
    zipcode NUMERIC(5, 0) NOT NULL
);

CREATE TABLE favorites (
    favorites_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
    location_id INTEGER REFERENCES us_locations (location_id) ON DELETE CASCADE
);
