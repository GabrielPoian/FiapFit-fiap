
document.querySelector("#js1").addEventListener("change", calcularOrcamento)
document.querySelector("#js2").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {
    

     
    let preco = 0
    if (js2.checked) {
        preco = 109,99
        js1.checked = false
    }
    if (js1.checked) {
        preco = 129,99
        js2.checked = false
    }
    
    
    

    output.innerHTML = "Valor por Mês = R$ " + preco.toFixed(2)
}



document.querySelector(".hamburguer")
        .addEventListener("click", mostrar_menu)

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("show-menu")
}


