//* Cargo los productos en la galeria */

document.addEventListener("DOMContentLoaded",function(event){

let precioReal 
let precioLista 

let cad = `<div class="container_card">
`
productos.forEach(function(item) {

    precioReal = Number(item.precio).toLocaleString("es-AR") 
    precioLista = ""

    cad += `
        <div class="card" category="${item.category}" subcategory="${item.subcategory}">
            <img id="myImg" onclick="cargarModal(${item.id})" src="${item.image}" alt="${item.descripcion}" title="${item.titulo}" itemprop="${item.id}" width="75%" height="75%">
            <div class="card_info">
                <div class="card_linea">${item.titulo}`
                
            if(Number(item.descuento)!=0){
                cad += `<span class="card_linea1">
                        <span class="material-icons-outlined">discount</span>
                        ${item.descuento} %</span>`
                precioReal = Number(item.precio - (item.precio * item.descuento / 100)).toLocaleString("es-AR") 
               
                precioLista = "  $" + Number(item.precio).toLocaleString("es-AR")                
            }

        // console.log(item.titulo, Number(item.precio).toLocaleString("es-AR"), precioLista)

        cad += `</div>
        <div class="card_linea">$ ${precioReal}<span class="card_linea2">${precioLista}</span> 
        </div> `
                
        if(Number(item.cuotas)!=0){
                cad += `<div class="card_linea">
                    <span class="material-icons-outlined card_linea3">credit_card</span>
                    ${item.cuotas} de $ ${Math.round(item.precio/item.cuotas).toLocaleString("es-AR") }</div>`};
 
    cad += `</div></div>`;
})

cad += `</div>`

// console.log(cad)
document.getElementById('cargar_galeria').innerHTML= cad;
    
});

/* Modelo de Html que arma por cada producto
    <div class="container_card" >
            <div class="card" category="Indumentaria" >
                    <img id="myImg" onclick="cargarModal(1)" src="../img/remera1.jpg" alt="Remera Numero 1" title="Remera 1" itemprop="image" width="75%" height="75%">
                        <div class="card_info">
                            <div class="card_linea">
                                Remera New Balance
                                <span class="card_linea1">
                                <span class="material-icons-outlined">discount</span>
                                30%</span>
                            </div>
                            <div class="card_linea">
                                $ 4.500 <span class="card_linea2">$ 5.000</span> 
                            </div>
                            <div class="card_linea">
                                <span class="material-icons-outlined card_linea3" >credit_card</span>
                                3 cuotas de $ 1.500
                            </div>
                        </div>
                </div>
 
*/


 







