$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	// $('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================
	// Desde el Flitro General
	$('.category_item').click(function(){
		let catProduct = $(this).attr('category');
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

	// Desde el subfiltro de flitro
	$('.subcategory_item').click(function(){

		let catsubProduct = $(this).attr('subcategory');
		console.log(catsubProduct);
 
		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.subcategory_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.card').css('transform', 'scale(0)');
		function hideProduct(){
			$('.card').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.card[subcategory="'+catsubProduct+'"]').show();
			$('.card[subcategory="'+catsubProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
        
	});

	// Desde el Carrousel
	$('.carousel-item').click(function(){

		let catsubProduct = $(this).attr('subcategory');
		console.log(catsubProduct);
 
		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.subcategory_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.card').css('transform', 'scale(0)');
		function hideProduct(){
			$('.card').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.card[subcategory="'+catsubProduct+'"]').show();
			$('.card[subcategory="'+catsubProduct+'"]').css('transform', 'scale(1)');
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

	// PARA ABRIR EL MODAL CON LA INFO DE LA IMAGEN
	// Get the modal
	function cargarModal(parId){

		// console.log ('click en imagen',parId,productos[parId-1]);
		// idea de https://www.w3schools.com/howto/howto_css_modal_images.asp

 		let modal = document.getElementById("myModal");

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById("myImg");
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption");
	
		modal.style.display = "block";
		modalImg.src = productos[parId-1].image
		captionText.innerHTML = productos[parId-1].titulo + '<br>' + productos[parId-1].descripcion;

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		modal.style.display = "none";
		}
 
	};





