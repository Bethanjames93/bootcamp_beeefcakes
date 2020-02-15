DROP DATABASE IF EXISTS drip_advisordb;
CREATE DATABASE drip_advisordb;

USE drip_advisordb;

CREATE TABLE breweries (
    id INT NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
    brewery_name VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    city VARCHAR(255) NULL,
    postal_code VARCHAR(255) NULL,
=======
    name VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    city VARCHAR(255) NULL,
    postalCode VARCHAR(255) NULL,
>>>>>>> 4b3886469de7102e728d7e24b3f08663900ec91c
    PRIMARY KEY (id)
);
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    comment  TEXT NOT NULL,
    brewery_name VARCHAR(255) NULL,
    rating INT NOT NULL,
    PRIMARY KEY(id)
    
);
