function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem[{
         "id":1,
         "nombre":"Burger BBQ",
         "img":"4ZozreZh9x2FQozMv-350-350.jpeg",
         "descripción":"Exquisita Hamburguesa de res, tocino, queso gouda.",
         "precio":226,
         "categoría":"Hamburguesas"
      },
      {
         "id":2,
         "nombre":"Burger Doble con queso",
         "img":"raNkGhBZcWsYzMppk-1200-1200.jpeg",
         "descripción":"Exquisita Hamburguesa de res, queso blue cheese.",
         "precio":156,
         "categoría":"Hamburguesas"
      },
      {
         "id":3,
         "nombre":"Burger choriqueso",
         "img":"LfaZjwa4AJMEuBX8B-350-350.jpeg",
         "descripción":"Exquisita Hamburguesa de res con chorizo, queso mozzarella gratinado, y salsa de chistorra.",
         "precio":166,
         "categoría":"Hamburguesas"
      },
      {
         "id":4,
         "nombre":"Burger Mexicana",
         "img":"images",
         "descripción":"Exquisita Hamburguesa de res, guacamole, tortillas crujientes, queso gouda y pico de gallo. Acompañada de un chile jalapeño empanizado relleno de queso.",
         "precio":173,
         "categoría":"Hamburguesas"
      },
      {
         "id":5,
         "nombre":"Burger de pollo",
         "img":"8Tbza8xw2HM74NbbC-1200-1200.jpeg",
         "descripción":"Exquisita Hamburguesa de pollo, queso philadelphia, aguacate, germen de alfalfa, y un toque de chiles toreados con cebolla.",
         "precio":123,
         "categoría":"Hamburguesas"
      },
      {
         "id":6,
         "nombre":"Burger blue cheese",
         "img":"raNkGhBZcWsYzMppk-1200-1200.jpeg",
         "descripción":"Exquisita Hamburguesa de res, queso blue cheese, tocino, y cebolla al chipotle.",
         "precio":134,
         "categoría":"Hamburguesas"
      },
      {
         "id":7,
         "nombre":"Brownie con nieve",
         "img":"https://www.petitchef.es/imgupl/recipe/brownie-con-helado-y-salsa-de-chocolate--100507p147578.jpg",
         "descripción":"delicioso postre de chocolate coronado con una sabrosa bola de nieve de vainilla",
         "precio":50,
         "categoría":"Postre"
      },
      {
         "id":8,
         "nombre":"Jericallas",
         "img":"https://www.cocinavital.mx/wp-content/uploads/2021/08/como-hacer-jericallas-634x420.jpg",
         "descripción":"Rico postre tapatío que hace una mezcla de dos culturas tanto europeas como mexicanas.",
         "precio":45,
         "categoría":"Postre"
      },
      {
         "id":9,
         "nombre":"Limonada Mineral",
         "img":"https://cdn7.kiwilimon.com/recetaimagen/3675/11838.jpg",
         "descripción":"Nuestra limonada mineral se elabora con jugo de limones frescos, agua mineral y azúcar, y se sirve con hielo y una rodaja de limón para darle un toque cítrico adicional.",
         "precio":50,
         "categoría":"Bebidas"
      },
      {
         "id":10,
         "nombre":"Agua Mineral",
         "img":"https://myhydration.org/wp-content/uploads/2020/01/iStock-492258348.jpg",
         "descripción":"Nuestro agua mineral se sirve fría en botellas de vidrio para mantener su frescura y sabor natural. Es una opción perfecta para aquellos que buscan una bebida refrescante sin calorías ni azúcares añadidos.",
         "precio":30,
         "categoría":"Bebidas"
      },
      {
         "id":11,
         "nombre":"Refrescos del día",
         "img":"https://elceo.com/wp-content/uploads/2021/08/refresco-agua-fotoartecl.jpg",
         "descripción":"Refrescos servidos con hielo en nuestros finos vasos de 355 ml.",
         "precio":25,
         "categoría":"Bebidas"
      },
      {
   "id": 12,
   "nombre": "Papas a la francesa",
   "img": "",
   "Descripción": "Papas con corte clásico a la francesa con sal rosada del himalaya, muy crujientes.",
    "precio": 80,
   "categoría": "Complementos",
     },
     {
   "id":13,
   "nombre":  "Papas gajo",
   "img": "",
   "descripción": "Papas en corte en gajo sazonada con sal rosada del himalaya y pimienta.",
   "precio": 90,
   "categoría": "Complemento",
     },
     {
      "id":14,
      "nombre":"Aros de Cebolla",
      "img":"https://www.comedera.com/wp-content/uploads/2018/07/aros-de-cebolla-500x450.jpg",
      "descripción":"Crujientes y doraditos aros de cebolla (200 g) acompañado de jícamas a la francesa y chilito en polvo",
      "precio":90,
      "categoría":"Complementos"
     },
     {
      "id":15,
      "nombre":"Elotitos preparados",
      "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistaad.es%2Fespacios%2Fcocinas%2Farticulos%2Frecetas-diseno-mazorcas-con-parmesano-y-lima-por-adrian-salvador%2F29118&psig=AOvVaw3Sx2DMMaNjbzxE7eWzRRIR&ust=1682011886428000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC49tm8tv4CFQAAAAAdAAAAABAK",
      "descripción":"2 medios elotitos amarillos asados a la parrilla y aderezados con ranch, queso panela y chilito.",
      "precio":95,
      "categoría":"Complementos"
     },
   {
      "id":16,
      "nombre":"Pa probar",
      "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistaad.es%2Fespacios%2Fcocinas%2Farticulos%2Frecetas-diseno-mazorcas-con-parmesano-y-lima-por-adrian-salvador%2F29118&psig=AOvVaw3Sx2DMMaNjbzxE7eWzRRIR&ust=1682011886428000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC49tm8tv4CFQAAAAAdAAAAABAK",
      "descripción":"Deliciosas alitas bañadas en salsa buffalo, con papas a la francesa, conjunto de aros de cebolla y 4 dedos de queso para compartir con zanahoria y apio cortado en tiras, acompañado de aderezos ranch, salsa de tomate y queso amarillo.",
      "precio":290,
      "categoría":"Complementos"
   },
   
     {
      "id": 17,
      "nombre": "Alitas de pollo teriyaki",
      "img": "https://www.comedera.com/wp-content/uploads/2022/12/alitas-de-pollo-teriyaki.jpg",
      "descripción": "Opción asiática que combina técnica y sabores milenarios. Las alitas de pollo teriyaki se preparan sofriendo la carne previamente marinada con una salsa dulce a base de miel, jengibre, salsa de soja y semillas de sésamo. Es deliciosamente espectacular.",
      "precio": 160,
      "categoría": "Complementos"
     },
     {
      "id":18,
      "nombre":"Dedos de queso",
      "img":"https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/05/27204819/RFB-0105-3-deditosdemozzarella-hvcomco.jpg",
      "descripción":"Dedos de queso mozzarella fritos y acompañados con un dip de tomate a las finas hierbas",
      "’precio’":75,
      "categoría":"Complementos"
     },
     {
      "id":19,
      "nombre":"Cerveza XX lager",
      "img":"https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/05/27204819/RFB-0105-3-deditosdemozzarella-hvcomco.jpg",
      "descripción":"Envase de 355 ml",
      "’precio’":47,
      "categoría":"Bebidas alcohólicas"
     },
     {
   "id": 20,
   "nombre": "Cerveza artesanal tempus dorada",
   "img": "https://tofuu.getjusto.com/orioneat-prod-resized/QSxbNCJKJ4sxzMT5Z-1200-1200.webp",
   "descripción": "Cerveza ligera, refrescante con notas intensas a miel y ligeras notas florales y cítricas de 355 ml.",
   "precio": 98,
   "categoría": "Bebidas alcohólicas"
     },
     {
   "id": 21,
   "nombre": "Mojito Azul",
   "img": "https://tofuu.getjusto.com/orioneat-prod-resized/QSxbNCJKJ4sxzMT5Z-1200-1200.webp",
   "descripción": "Gin Boodles Dry, Limón amarillo, Hierba buena, Tónica, Curazao",
   "precio": 120,
   "categoría": "Bebidas alcohólicas"
    },
    {
   "id": 22,
   "nombre": "Mango tropical",
   "img": "https://tofuu.getjusto.com/orioneat-prod-resized/QSxbNCJKJ4sxzMT5Z-1200-1200.webp",
   "descripción": "Mezcal 400 conejos 50 ml Mango, piña y chamoy",
   "precio": 143,
   "categoría": "Bebidas alcohólicas"
     },
     {
   "id": 23,
   "nombre": "Paloma La Bonita",
   "img": "https://tofuu.getjusto.com/orioneat-prod-resized/QSxbNCJKJ4sxzMT5Z-1200-1200.webp",
   "descripción": "Tequila Tradicional silver 44 ml, Toronja, Romero, Ginger Ale",
   "precio": 137,
   "categoría": "Bebidas alcohólicas"
    }
    ]
   