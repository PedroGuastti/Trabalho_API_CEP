//exemplo set interval / setTimeOut

function processamento(){
    console.log("Em processamento...")
}

//executa n vezes no tempo informado
//ex: buscar cotaçao da bolsa de valores
setInterval(processamento(),1000)

//aguarda n segundos para executar uma vez
setTimeout(processamento,4000)