DROP DATABASE IF EXISTS mercadoarte;

CREATE DATABASE mercadoarte;
USE mercadoarte;

CREATE TABLE techniques  (
    id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);


CREATE TABLE artists (
    id VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    nacionality VARCHAR(255) NOT NULL
);

CREATE TABLE users (
id VARCHAR(255) PRIMARY key ,
name VARCHAR(255),
address VARCHAR(255)
email VARCHAR(255),
password VARCHAR(255)
);

CREATE TABLE roles (
id VARCHAR(255) PRIMARY key ,
type VARCHAR(255) NOT NULL,
FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE products  (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    creation_date VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    on_sale TINYINT(1),
    new TINYINT(1),
    featured TINYINT(1),
    img VARCHAR(255),
    technique_id VARCHAR(255),
    artist_id VARCHAR(255),
    FOREIGN KEY (technique_id) REFERENCES techniques(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE sales (
    id VARCHAR(255) PRIMARY KEY,
    sales_date VARCHAR(255) NOT NULL,
    product_id VARCHAR(255),
    client_id VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (client_id) REFERENCES clients (id)
);