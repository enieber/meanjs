
    var total_carrinho = document.getElementById("total_carrinho");

    function moneyToFloat(text){

        var clearText = text.replace("R$ ", "").replace(",", ".");
        return parseFloat(clearText);
    }
    
    function floatToMoneyText(value){
        var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
        text = "R$ " +text;
        return text.substr(0, text.length -2) + "," + text.substr(-2);
    }

    function readTotal() {
        var total = document.getElementById("total_carrinho");
        return moneyToFloat(total_carrinho.innerHTML);
    }

    function writeTotal(value) {
        var total = document.getElementById("total_carrinho");
        total_carrinho.innerHTML = floatToMoneyText(value);
    }
   
    var totalo = document.getElementById("total");

    function writeTotala(value) {
        var totali = document.getElementById("total");
        totalo.innerHTML = floatToMoneyText(value);
    }


    function calculaTotalProdutos(){
    
        var produtos = document.getElementsByClassName("produto");
      
        var totalprodutos = 0;
        var subtotal;
      
       for(var pos = 0; pos < produtos.length; pos++) {
            var priceElements = produtos[pos].getElementsByClassName("preco");
            var priceText = priceElements[0].innerHTML;
            var price = moneyToFloat(priceText);
            var qtyElements = produtos[pos].getElementsByClassName("quantidade");
            var qtyText = qtyElements[0].value;
            var quantidade = moneyToFloat(qtyText);
            subtotal = price * quantidade;
            totalprodutos+=subtotal;

        }

        return totalprodutos;
    }

    function quantidadeMudou() {
        writeTotal(calculaTotalProdutos());
        writeTotala(calculaTotalProdutos());
    }

    function onDocumentLoad() {
        var textEdits = document.getElementsByClassName("quantidade");
    
        for(var i = 0; i < textEdits.length; i++) {
            textEdits[i].onchange = quantidadeMudou;
        }
    }

   
   window.onload = onDocumentLoad;

    function consultaCEP(value){
        var servico = "http://api.postmon.com.br/v1/cep/";
        var cep = value;

        function onCepDone(data) {
            console.log(data.logradouro);
        }
        $.getJSON(servico + cep).done(onCepDone);

        function onCepError(error) {
            console.log("Erro: " + error.statusText)
        };

        $.getJSON(servico + cep).done(onCepDone).fail(onCepError);
    }
    /*
    Exemplo do retorno...

    {   "complemento":"var complemento",
        "bairro":"var bairro",
        "cidade":"var cidade",
        "logradouro":"var logradouro",
        "cep":"var cep",
        "estado":"var estado"   }

        data.indice
    */


$(function(){
    $('.btn-compare').click(function(){
        var sid = $("#button").children().has("a").eq(1).addClass("destaque");
        var comprar = "comprar";
        
        $.ajax({
            type: 'POST',
            data: {sid:sid,comprar:comprar},
            url: 'confg_carrinho.php/comprar',
            dataType:'json',

            success: function(res){
                  $("#car").append(res);
            }
            // beforeSend: function(){
            //     $('#loading').css({display:"block"});
            // },
            // complete: function(msg){
            //     $('#loading').css({display:"none"});
            // }

    });
 });
})