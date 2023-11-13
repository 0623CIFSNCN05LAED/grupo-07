DROP TABLE IF EXISTS (MercadoArte);

USE MercadoArte;

CREATE TABLE (technique);   (
    id INT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,

    
);


CREATE TABLE (artists); (
    id INT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    nacionality VARCHAR(255) NOT NULL,
);


CREATE TABLE (clients); (
    id PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
   address VARCHAR(255),
);


CREATE TABLE (sales); (
    id INT PRIMARY KEY,
    sales_date DATE NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (client_id) REFERENCES clients (id),
);




CREATE TABLE (products);  (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    on_sale BOOLEAN,
    new BOOLEAN,
    img VARCHAR(255),
    technique_id INT,
    artist_id INT,
    FOREIGN KEY (technique_id) REFERENCES Techniques(id),
    FOREIGN KEY (artist_id) REFERENCES Artists(id),
);


