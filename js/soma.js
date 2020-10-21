/* 
Efetua a soma de dois números




function calc (num1,num2, calculo){
    if (calculo == "sum"){
        var resultado = num1 + num2
    }else if (calculo == "minus"){
        var resultado = num1-num2
    }else if (calculo == "div"){
        var resultado = num1/num2
    }else if(calculo == "times"){
        var resultado = num1*num2
    }else{
        throw Error ("Condição não explícita")
    }
    return resultado
    
}

console.log(calc(2,8))

*/