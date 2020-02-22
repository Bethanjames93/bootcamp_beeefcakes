DROP DATABASE IF EXISTS drip_advisordb;
CREATE DATABASE drip_advisordb;

USE drip_advisordb;

CREATE TABLE breweries (
    id INT NOT NULL AUTO_INCREMENT,
    brewery_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    comment  TEXT NOT NULL,
    breweryId INT NOT NULL,
    rating INT NOT NULL,
    PRIMARY KEY(id)
    
);
CREATE TABLE login_information (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);