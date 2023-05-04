SELECT * FROM categorias;

INSERT INTO categorias (name_cate)
VALUES ('Hamburguesas');

INSERT INTO categorias (name_cate)
VALUES ('Postres');

INSERT INTO categorias (name_cate)
VALUES ('Bebidas');

INSERT INTO categorias (name_cate)
VALUES ('Complementos');

INSERT INTO categorias (name_cate)
VALUES ('Bebidas alcohólicas');

INSERT INTO productos (prod_name, descrip_text,price, id_cate)
VALUES ('Burger Doble con queso','Exquisita Hamburguesa de res y queso blue cheese.',156,1);

INSERT INTO productos (prod_name, descrip_text,price, id_cate )
VALUES ('Burger BBQ', 'Exquisita Hamburguesa de res, tocino y queso gouda.', 226,1);

INSERT INTO productos (prod_name, descrip_text,price, id_cate )
VALUES ('Burger choriqueso','Exquisita Hamburguesa de res con chorizo, queso mozzarella gratinado y salsa de chistorra.',166,1);

INSERT INTO productos (prod_name, descrip_text,price, id_cate)
VALUES ('Burger Mexicana', 'Exquisita Hamburguesa de res, guacamole, tortillas crujientes, queso gouda y pico de gallo.', 173,1);

 INSERT INTO productos (prod_name, descrip_text,price, id_cate)
VALUES ('Burger de pollo', 'Exquisita Hamburguesa de pollo, queso philadelphia, aguacate y germen de alfalfa.', 123,1);

INSERT INTO productos (prod_name, descrip_text,price, id_cate )
VALUES ('Burger blue cheese', 'Exquisita Hamburguesa de res, queso blue cheese, tocino y cebolla al chipotle.', 134,1);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES
('Brownie con nieve', 'Delicioso postre de chocolate coronado con una sabrosa bola de nieve de vainilla.', 50, 2),
('Jericallas', 'Rico postre tapatío que hace una mezcla de dos culturas tanto europeas como mexicanas.', 45, 2),
('Pastel de chocolate', 'Delicioso pastel de chocolate con tres capas de bizcocho de chocolate y crema de chocolate.', 98, 2);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES 
('Limonada Mineral','Nuestra limonada mineral se elabora con jugo de limones frescos, agua mineral y azúcar.',50,3),
('Agua Mineral','Nuestro agua mineral se sirve fría en botellas de vidrio para mantener su frescura y sabor natural.',30,3),
('Refrescos del día','Refrescos servidos con hielo en nuestros finos vasos de 355 ml.',25,3);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES
    ("Papas a la francesa", "Papas con corte clásico a la francesa con sal rosada del himalaya, muy crujientes.", 80, 4),
    ("Papas gajo", "Papas en corte en gajo sazonada con sal rosada del himalaya y pimienta.", 90, 4),
    ("Aros de Cebolla", "Crujientes y doraditos aros de cebolla (200 g) acompañado de jícamas a la francesa y chilito en polvo.", 90, 4),
    ("Elotitos preparados", "Dos medios elotitos amarillos asados a la parrilla y aderezados con ranch, queso panela y chilito.", 95, 4),
    ("Pa probar", "Deliciosas alitas bañadas en salsa buffalo, con papas a la francesa, conjunto de aros de cebolla y cuatro dedos de queso.", 290, 4),
    ("Alitas de pollo teriyaki", "Las alitas de pollo teriyaki se preparan sofriendo la carne previamente marinada con salsa dulce a base de miel y jengibre.", 160, 4),
    ("Dedos de queso", "Dedos de queso mozzarella fritos y acompañados con un dip de tomate a las finas hierbas.", 75, 4);


INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES ('Cerveza XX lager','Con aroma suave y fresco con notas de malta, envase de 355 ml.',47,5);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES ('Cerveza artesanal tempus dorada','Cerveza ligera, con notas intensas a miel de 355 ml.',98,5);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES ('Mojito Azul','Gin Boodles Dry, Limón amarillo, Hierba buena, Tónica y Curazao.',120,5);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES ('Mango tropical','Mezcal 400 conejos de 50 ml con mango, piña y chamoy.',143,5);

INSERT INTO productos (prod_name, descrip_text, price, id_cate)
VALUES ('Paloma La Bonita','Tequila Tradicional silver 44 ml, toronja, romero y ginger ale.',137,5);


INSERT INTO usuarios (user_name, user_tel, user_email, user_passw, user_type)
VALUES 
('AdminPrincipal','3314256788','burgershouse2023@gmail.com','Bur12345hou','admin'),
('Abel Zapien','3312251234','abelzapi_en@gmail.com','Pa$$w0rd1','cliente');

INSERT INTO usuarios (user_name, user_tel, user_email, user_passw, user_type)
VALUES 
('Alonso Serrano','3312255238','alon_serrano@gmail.com','B0lita45$','cliente'),
('Ana Cuevas','3314451997','anita_cuevas@gmail.com','Azucar$$2','cliente'),
('Regina Castillo','3312271265','regina_cas_tillo@gmail.com','Verde$$4','cliente');