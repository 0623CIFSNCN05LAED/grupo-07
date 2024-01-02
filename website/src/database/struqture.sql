DROP DATABASE IF EXISTS mercadoarte;

CREATE DATABASE mercadoarte;
USE mercadoarte;

CREATE TABLE techniques  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);


CREATE TABLE artists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    nacionality VARCHAR(255) NOT NULL
);


CREATE TABLE roles (
id INT AUTO_INCREMENT PRIMARY KEY,
type VARCHAR(255) NOT NULL
);



CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
address VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
rol_id INT NOT NULL,
FOREIGN KEY (rol_id) REFERENCES roles (id)
);



CREATE TABLE products  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    creation_date VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    on_sale TINYINT(1),
    new TINYINT(1),
    featured TINYINT(1),
    img VARCHAR(255),
    technique_id INT NOT NULL,
    artist_id INT NOT NULL,
    FOREIGN KEY (technique_id) REFERENCES techniques(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sales_date VARCHAR(255) NOT NULL,
    product_id INT NOT NULL,
    users_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (users_id) REFERENCES users (id)
);