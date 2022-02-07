let btnDowloadCurriculo = document.getElementById('btnDowloadCurriculo')

function DowloadCurriculo(){
    alert('Não possui anexo do currículo')
}

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

/*menu mobile*/
let show = true;

const menuSection = document.querySelector('.headerNavBar')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener("click", () => {
    document.body.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show ;
})