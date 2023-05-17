$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	// $('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);
 
		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.card').css('transform', 'scale(0)');
		function hideProduct(){
			$('.card').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.card[category="'+catProduct+'"]').show();
			$('.card[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
        
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	// $('.category_item[category="all"]').click(function(){
	// 	function showAll(){
	// 		$('.product-item').show();
	// 		$('.product-item').css('transform', 'scale(1)');
	// 	} setTimeout(showAll,400);
	// });

});


	let cad = `<div class="container">
	`

	productos.forEach(function(item) {
		cad += `
		  	<div class="card" category="${item.category}>
				<img src="${item.image}" alt="${item.descripcion}" title="${item.titulo}" itemprop="image" width="75%" height="75%">
				<p>${item.titulo}`
				  
				if(item.descuento!=0){
				  	cad += `<span style="color:red">
				   			<span class="material-icons-outlined">discount</span>
							${item.descuento} %</span>`};

				cad += `</p>
				  		<p>${item.precio}</p>`
				
				if(item.coutas!=0){
					cad += `<p>
					 		<span class="material-icons-outlined">credit_card</span>
							${item.cuotas} de $ ${item.precio/item.cuotas}</p>`};

			cad += `</div>`;
	  	})
	
	
	document.write(cad)
	document.getElementById("cargar_galeria").innerHTML = cad
	console.log (cad);


	  
// 	  <div class="card" category="Indumentaria" >
// 	  <img src="../img/remera1.jpg" alt="Remera Numero 1" title="Remera 1" itemprop="image" width="75%" height="75%">

// 	  <p>Remera New Balance
// 		  <span style="color:red">
// 			  <span class="material-icons-outlined">discount</span>
// 		  30%</span>
// 	  </p>
// 	  <p>$ 4.500</p>
// 	  <p>
// 		  <span class="material-icons-outlined">credit_card</span>
// 		  3 cuotas de $ 1.500
// 	  </p>

//   </div>




