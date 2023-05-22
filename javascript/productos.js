/* let fotos=[
    "../img/remera1.jpg",
    "../img/remera2.jpg",
    "../img/remera3.jpg",
    "../img/remera4.jpg",
] */

const productos= [
{
id: 1,
titulo: "Remera New Balance",
descripcion: "Dry Fit Color Verde",
category: "Indumentaria",
subcategory: "Remeras", 
precio: "3500",
image: "../img/remera1.jpg",
cuotas: "3",
descuento: "30"
},
{
id: 2,
titulo: "Remera Assys",
descripcion: "Dry Fit Degrade Negro",
category: "Indumentaria",
subcategory: "Remeras", 
precio: "3500",
image: "../img/remera2.jpg",
cuotas: "0",
descuento: "0"
},
{
id: 3,
titulo: "Remera DC",
descripcion: "Escote en V Violeta",
category: "Indumentaria",
subcategory: "Remeras", 
precio: "3500",
image: "../img/remera3.jpg",
cuotas: "3",
descuento: "30"
},
{
    id: 4,
    titulo: "Remera Under Armour",
    descripcion: "Driy Fit Azul Francia",
    category: "Indumentaria",
    subcategory: "Remeras", 
    precio: "3500",
    image: "../img/remera4.jpg",
    cuotas: "0",
    descuento: "10"
    },
{
    id: 5,
    titulo: "Remera Nike",
    descripcion: "Algodon Celeste",
    category: "Indumentaria",
    subcategory: "Remeras", 
    precio: "2800",
    image: "../img/remera5.jpg",
    cuotas: "2",
    descuento: "0"
    },

    {
        id: 6,
        titulo: "Remera Adidas",
        descripcion: "Roja con logo",
        category: "Indumentaria",
        subcategory: "Remeras", 
        precio: "3500",
        image: "../img/remera6.jpg",
        cuotas: "0",
        descuento: "0"
        },

{
        id: 7,
        titulo: "Zapatilla New Balance",
        descripcion: "Urban Gris",
        category: "Calzado",
        subcategory: "Zapatillas", 
        precio: "10500",
        image: "../img/zapa1.jpg",
        cuotas: "6",
        descuento: "0"
        },

{
        id: 8,
        titulo: "Zapatilla Puma",
        descripcion: "Urban Blanca",
        category: "Calzado",
        subcategory: "Zapatillas", 
        precio: "9000",
        image: "../img/zapa2.jpg",
        cuotas: "0",
        descuento: "0"
        },
{
        id: 9,
        titulo: "Zapatilla Nike",
        descripcion: "Deportiva Negra",
        category: "Calzado",
        subcategory: "Zapatillas", 
        precio: "12000",
        image: "../img/zapa3.jpg",
        cuotas: "3",
        descuento: "0"
        },
{
        id: 10,
        titulo: "Zapatilla Adidas",
        descripcion: "Deportiva Turquesa",
        category: "Calzado",
        subcategory: "Zapatillas", 
        precio: "15000",
        image: "../img/zapa4.jpg",
        cuotas: "3",
        descuento: "20"
        },


    {
        id: 11,
        titulo: "Pelota Qatar 2022",
        descripcion: "La pelota de los campeones",
        category: "Accesorios",
        subcategory: "Pelotas", 
        precio: "6000",
        image: "../img/accesorio1.jpg",
        cuotas: "0",
        descuento: "0"
        },

 {
        id: 12,
        titulo: "Bolso Nike",
        descripcion: "Mediano Rosa y Negro",
        category: "Accesorios",
        subcategory: "Bolsos", 
        precio: "6200",
        image: "../img/accesorio2.jpg",
        cuotas: "0",
        descuento: "10"
        },

     {
        id: 13,
        titulo: "Gorro Nike",
        descripcion: "Blanco con logo",
        category: "Accesorios",
        subcategory: "Gorras", 
        precio: "2000",
        image: "../img/accesorio3.jpg",
        cuotas: "0",
        descuento: "0"
        },

     {
        id: 14,
        titulo: "Gorro Jordan",
        descripcion: "Rojo con logo gris",
        category: "Accesorios",
        subcategory: "Gorras", 
        precio: "2200",
        image: "../img/accesorio4.jpg",
        cuotas: "2",
        descuento: "0"
        },

{
        id: 15,
        titulo: "Bolso Under Armour",
        descripcion: "Mediano Negro",
        category: "Accesorios",
        subcategory: "Bolsos", 
        precio: "5200",
        image: "../img/accesorio5.jpg",
        cuotas: "0",
        descuento: "10"
        },

{
        id: 16,
        titulo: "Bolso Adidas",
        descripcion: "Mediano Gris Animal Print",
        category: "Accesorios",
        subcategory: "Bolsos", 
        precio: "8400",
        image: "../img/accesorio6.jpg",
        cuotas: "2",
        descuento: "0"
        },

{
        id: 17,
        titulo: "Morral Puma",
        descripcion: "Chico Negro",
        category: "Accesorios",
        subcategory: "Bolsos", 
        precio: "3990",
        image: "../img/accesorio7.jpg",
        cuotas: "0",
        descuento: "10"
        },

{
        id: 18,
        titulo: "Pelota Molten",
        descripcion: "Basquet Nro 6",
        category: "Accesorios",
        subcategory: "Pelotas", 
        precio: "7500",
        image: "../img/accesorio8.jpg",
        cuotas: "3",
        descuento: "0"
        },

{
        id: 19, 
        titulo: "Pelota Sorma",
        descripcion: "Voley Rosa y Celeste",
        category: "Accesorios",
        subcategory: "Pelotas", 
        precio: "7100",
        image: "../img/accesorio9.jpg",
        cuotas: "0",
        descuento: "20"
        },
        
{
        id: 20,
        titulo: "Pelota Molten",
        descripcion: "Basquet Nro 6",
        category: "Accesorios",
        subcategory: "Pelotas", 
        precio: "7500",
        image: "../img/accesorio8.jpg",
        cuotas: "3",
        descuento: "0"
        },

{
        id: 21,
        titulo: "Pelotas Penn",
        descripcion: "Tubo por 3 Tenis/Padle",
        category: "Accesorios",
        subcategory: "Pelotas", 
        precio: "1500",
        image: "../img/accesorio10.jpg",
        cuotas: "0",
        descuento: "0"
        },

{
        id: 22,
        titulo: "Campera Adidas",
        descripcion: "Basica Negra",
        category: "Indumentaria",
        subcategory: "Camperas", 
        precio: "11500",
        image: "../img/campera1.jpg",
        cuotas: "3",
        descuento: "0"
        },

{
        id: 23,
        titulo: "Campera Assys",
        descripcion: "Mujer Rosa Oscuro",
        category: "Indumentaria",
        subcategory: "Camperas", 
        precio: "7800",
        image: "../img/campera2.jpg",
        cuotas: "2",
        descuento: "0"
        },

{
        id: 24,
        titulo: "Campera Adidas",
        descripcion: "Original Rosa con estampa",
        category: "Indumentaria",
        subcategory: "Camperas", 
        precio: "18000",
        image: "../img/campera3.jpg",
        cuotas: "6",
        descuento: "15"
        },

        {
        id: 25,
        titulo: "Campera Adidas",
        descripcion: "Selección Argentina 3 estrellas",
        category: "Indumentaria",
        subcategory: "Camperas", 
        precio: "15900",
        image: "../img/campera1.jpg",
        cuotas: "0",
        descuento: "30"
        },


]
