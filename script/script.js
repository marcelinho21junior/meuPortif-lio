function enviar(){
    document.getElementById("name")
    document.getElementById("sobrename")

    if((name=='') && (sobrename=='')){
        success=false
    }else{
        alert('Mensagem enviada com sucesso!!!')
        success=true
    }
}