function moneyToFloat(o){var t=o.replace("R$ ","").replace(",",".");return parseFloat(t)}function floatToMoneyText(o){var t=(1>o?"0":"")+Math.floor(100*o);return t="R$ "+t,t.substr(0,t.length-2)+","+t.substr(-2)}function readTotal(){document.getElementById("total_carrinho");return moneyToFloat(total_carrinho.innerHTML)}function writeTotal(o){document.getElementById("total_carrinho");total_carrinho.innerHTML=floatToMoneyText(o)}function writeTotala(o){document.getElementById("total");totalo.innerHTML=floatToMoneyText(o)}function calculaTotalProdutos(){for(var o,t=document.getElementsByClassName("produto"),a=0,n=0;n<t.length;n++){var e=t[n].getElementsByClassName("preco"),r=e[0].innerHTML,l=moneyToFloat(r),c=t[n].getElementsByClassName("quantidade"),u=c[0].value,d=moneyToFloat(u);o=l*d,a+=o}return a}function quantidadeMudou(){writeTotal(calculaTotalProdutos()),writeTotala(calculaTotalProdutos())}function onDocumentLoad(){for(var o=document.getElementsByClassName("quantidade"),t=0;t<o.length;t++)o[t].onchange=quantidadeMudou}function consultaCEP(o){function t(o){console.log(o.logradouro)}function a(o){console.log("Erro: "+o.statusText)}var n="http://api.postmon.com.br/v1/cep/",e=o;$.getJSON(n+e).done(t),$.getJSON(n+e).done(t).fail(a)}var total_carrinho=document.getElementById("total_carrinho"),totalo=document.getElementById("total");window.onload=onDocumentLoad,$(function(){$(".btn-compare").click(function(){var o=$("#button").children().has("a").eq(1).addClass("destaque"),t="comprar";$.ajax({type:"POST",data:{sid:o,comprar:t},url:"confg_carrinho.php/comprar",dataType:"json",success:function(o){$("#car").append(o)}})})});