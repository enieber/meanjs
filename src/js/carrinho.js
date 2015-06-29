
$(document).ready(function() {
	$('#comprar').on('click', function(sid) {
		var id = sid;
			$.ajax({
            type: 'POST',
            data: {id:id},
            url: 'confg_carrinho.php/comprar',
            dataType:'json',
            success: function(res){
                  // $("#car").append(res);
                  alert("Certo");
            }
   		});
	});
});
$(function(){
	debuga = $('#carrinho-cardapio');
	enviar = $('form[name="carrinho"]');
	action = 'paginas/carrinho.php';
	


function resposta(datas){
	debuga.empty().html(datas);
}

		enviar.submit(function(){
		var procurar = $('input[name="id"]').val();

		
		$.post(action,{procurar: procurar},resposta);
		
		
		return false;	
	});

});