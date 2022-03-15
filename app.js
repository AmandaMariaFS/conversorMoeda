function Converter(){
    var valor = parseFloat(document.getElementById("valor").value);

    if(valor > 0){
        var valorDolar = valor / 5.15;
        var valorIene = valor * 22.94;
    
        document.getElementById("conversao").innerHTML = "R$ " + valor + " equivale a:";
        document.getElementById("conversaoDolar").innerHTML = valorDolar.toFixed(2) + " dólares";
        document.getElementById("conversaoIene").innerHTML = valorIene.toFixed(2) + " Iene japonês";
    }
    else{
        document.getElementById("conversao").innerHTML = "Digite um número maior que zero";
        document.getElementById("conversaoDolar").innerHTML = " ";
        document.getElementById("conversaoIene").innerHTML = " ";
    }
}