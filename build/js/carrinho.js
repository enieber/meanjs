$(document).ready(function(){$("#comprar").on("click",function(a){var n=a;$.ajax({type:"POST",data:{id:n},url:"confg_carrinho.php/comprar",dataType:"json",success:function(a){alert("Certo")}})})}),$(function(){function a(a){debuga.empty().html(a)}debuga=$("#carrinho-cardapio"),enviar=$('form[name="carrinho"]'),action="paginas/carrinho.php",enviar.submit(function(){var n=$('input[name="id"]').val();return $.post(action,{procurar:n},a),!1})});