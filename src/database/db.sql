-- creating database
CREATE DATABASE traigosql;

--Using the database

use traigosql;

--creating a table

CREATE TABLE product(
    id INT(6)  AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    cantidad VARCHAR(50) ,
    unidades VARCHAR(50) ,
    fechaVencimiento VARCHAR(50),
    tipo VARCHAR(100),
    lote VARCHAR (100) NOT NULL, 
    invima VARCHAR (100) NOT NULL
);

-- TO SHOW ALL TABLES
SHOW TABLES;

--TO DESCRIBE THE TABLE
describe product;