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

/* 
	function renderizarGaleria(imagenes) {
		let html = '';
		
		imagenes.forEach(function(imagen){
		  html += `
			<div class="galeria-item">
			  <img src="${imagen.src}" alt="${imagen.alt}" width="200px" />
			  <h3>${imagen.nombre}</h3>
			  <p>${imagen.precio}€</p>
			</div>
		  `;
		});
		
		$('#galeria').html(html);
	  }
	  
	  $(function() {
		renderizarGaleria(imagenes);
	  });
 */


});