CREATE DATABASE burguerhousedb;

USE burguerhousedb;

CREATE TABLE categorias(
id_cate INT AUTO_INCREMENT NOT NULL,
name_cate VARCHAR(150) NOT NULL, 
PRIMARY KEY (`id_cate`));

CREATE TABLE productos(
prod_id INT AUTO_INCREMENT NOT NULL,
prod_name VARCHAR(150) NOT NULL,
descrip_text VARCHAR(250) NOT NULL,
price DOUBLE NOT NULL,
id_cate  INT NOT NULL,
PRIMARY KEY (`prod_id`));

CREATE TABLE usuarios(
user_id INT AUTO_INCREMENT NOT NULL,
user_name VARCHAR(150) NOT NULL,
user_tel VARCHAR(10) NOT NULL,
user_email VARCHAR(150) NOT NULL,
user_passw VARCHAR(20) NOT NULL,
user_type  VARCHAR(50) NOT NULL,
PRIMARY KEY (`user_id`));


