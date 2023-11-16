INSERT INTO users (name, email, username, password) VALUES ('Michael Mote', 'michael.mote@test.com', 'Mikesawce', '12345asdf');
INSERT INTO users (name, email, username, password) VALUES ('Michael Mote1', 'michael.mote1@test.com', 'Mikesawce1', '123456asd');
INSERT INTO users (name, email, username, password) VALUES ('Michael Mote2', 'michael.mote2@test.com', 'Mikesawce2', '1234567');
INSERT INTO users (name, email, username, password) VALUES ('Michael Mote3', 'michael.mote3@test.com', 'Mikesawce3', '12345678');

INSERT INTO us_locations (name, city, state, zipcode) VALUES ('Conder', 'Killeen', 'TX', 76541);
INSERT INTO us_locations (name, city, state, zipcode) VALUES ('Abrams', 'Ft Cavazos', 'TX', 76544);
INSERT INTO us_locations (name, city, state, zipcode) VALUES ('Longbranch', 'Killeen', 'TX', 76543);

INSERT INTO friends (requestee_id, acceptee_id) VALUES (1, 2);
INSERT INTO friends (requestee_id, acceptee_id) VALUES (2, 1);
INSERT INTO friends (requestee_id, acceptee_id) VALUES (1, 3);
INSERT INTO friends (requestee_id, acceptee_id) VALUES (1, 4);

INSERT INTO favorites (user_id, location_id) VALUES (1, 1);
INSERT INTO favorites (user_id, location_id) VALUES (1, 2);
INSERT INTO favorites (user_id, location_id) VALUES (1, 3);