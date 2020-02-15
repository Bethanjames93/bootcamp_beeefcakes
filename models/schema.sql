DROP DATABASE IF EXISTS drip_advisordb;
CREATE DATABASE drip_advisordb;

USE drip_advisordb;

CREATE TABLE breweries (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    city VARCHAR(255) NULL,
    postalCode VARCHAR(255) NULL,
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
