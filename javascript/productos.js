/* let fotos=[
    "../img/remera1.jpg",
    "../img/remera2.jpg",
    "../img/remera3.jpg",
    "../img/remera4.jpg",
] */

let productos= [
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
]


function cargarProductos() {

    let cad = `<div class="container_card">
`
    productos.forEach(function(item) {

        // console.log (Number(item.descuento))
        cad += `
            <div class="card" category="${item.category}">
                <img src="${item.image}" alt="${item.descripcion}" title="${item.titulo}" itemprop="image" width="75%" height="75%">
                <p>${item.titulo}`
                
                if(Number(item.descuento)!=0){
                    cad += `<span style="color:red">
                            <span class="material-icons-outlined">discount</span>
                            ${item.descuento} %</span>`};

                cad += `</p>
                        <p>${item.precio}</p>`
                
                if(Number(item.cuotas)!=0){
                    cad += `<p>
                            <span class="material-icons-outlined">credit_card</span>
                            ${item.cuotas} de $ ${item.precio/item.cuotas}</p>`};

            cad += `</div>`;
        })

    cad += `</div>`
    
     
    //document.write(cad)
    document.getElementById("cargar_galeria").innerHTML = cad;
    
    console.log (cad);
}

cargarProductos()

 







