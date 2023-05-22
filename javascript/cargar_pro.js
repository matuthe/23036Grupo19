//* Cargo los productos en la galeria */

document.addEventListener("DOMContentLoaded",function(event){


let precioReal 
let precioLista 

let cad = `<div class="container_card">
`
productos.forEach(function(item) {

    precioReal = item.precio
    precioLista = ""
    // console.log (Number(item.descuento))
    cad += `
        <div class="card" category="${item.category}" subcategory="${item.subcategory}">
            <img src="${item.image}" alt="${item.descripcion}" title="${item.titulo}" itemprop="image" width="75%" height="75%">
            <div class="card_info">
                <div class="card_linea">${item.titulo}`
                
            if(Number(item.descuento)!=0){
                cad += `<span class="card_linea1">
                        <span class="material-icons-outlined">discount</span>
                        ${item.descuento} %</span>`
                precioReal = item.precio - (item.precio * item.descuento / 100)
               
                precioLista = "  $" + item.precio
            }

        cad += `</div>
        <div class="card_linea">$ ${precioReal}<span class="card_linea2">${precioLista}</span> 
        </div> `
                
        if(Number(item.cuotas)!=0){
                cad += `<div class="card_linea">
                    <span class="material-icons-outlined card_linea3">credit_card</span>
                    ${item.cuotas} de $ ${Math.round(item.precio/item.cuotas)}</div>`};
 
    cad += `</div></div>`;
})

cad += `</div>`


// document.write(cad)
// document.getElementById("cargar_galeria").innerHTML = cad;

// console.log(cad)
    document.getElementById('cargar_galeria').innerHTML= cad;
    
});






 







