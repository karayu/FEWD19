$(document).ready(function(){
		
	// International Link
	$('#primary-nav .international').on('click', function(e){
		e.preventDefault();

		$('#slide-down .drop').hide();
		$('.drop.international').show().addClass('open');
		$('#slide-down').slideDown(150).addClass('open');			

	});
		

});