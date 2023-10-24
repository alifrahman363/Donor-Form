-- Active: 1692809863120@@localhost@5432@postgres

CREATE TABLE
    donorform(
        id_user serial PRIMARY KEY,
        donor_fname VARCHAR(255) NOT NULL,
        donor_gender VARCHAR(255) NOT NULL,
        donor_dob DATE NOT NULL,
        donor_location_zip VARCHAR(255) NOT NULL,
        donor_location_city VARCHAR(255) NOT NULL,
        donor_location_district VARCHAR(255) NOT NULL,
        donor_location_division VARCHAR(255) NOT NULL,
        donor_blood_group VARCHAR(255) NOT NULL
    );

CREATE TABLE
    signup(
        id serial PRIMARY KEY,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );