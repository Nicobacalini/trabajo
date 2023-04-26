const btnSubmit = document.querySelector('.sendBTN')

btnSubmit.addEventListener('click',(event)=>{
    
    event.preventDefault()

    const difuminador = document.createElement('div')
    const mensajeCont = document.createElement('div')
    const mensajeTexto = document.createElement('p')
    const btnAceptar = document.createElement('input')

    difuminador.classList.add('difuminador')
    btnAceptar.type = 'button'
    btnAceptar.value = 'Aceptar'

    mensajeTexto.innerHTML = `Hemos recibido tu propuesta, <br> Pronto nos comunicaremos contigo. <br><br> Gracias por confiar en nosotros!`

    mensajeCont.style.backgroundColor = "#ccc"
    mensajeCont.style.fontSize = '2.8vh'
    mensajeCont.style.padding = '2vh 1vh'
    mensajeCont.style.borderRadius = '1vh'
    mensajeCont.style.width = '40vw'
    mensajeCont.style.height = '30vh'
    mensajeCont.style.display = 'flex'
    mensajeCont.style.justifyContent = 'center'
    mensajeCont.style.alignItems = 'center'
    mensajeCont.style.textAlign = 'center'
    mensajeCont.style.flexDirection = 'column'

    mensajeTexto.style.height = '90%'
    mensajeTexto.style.display = 'flex'
    mensajeTexto.style.justifyContent = 'center'
    mensajeTexto.style.alignItems = 'center'

    btnAceptar.style.display = 'flex'
    btnAceptar.style.justifyContent = 'center'
    btnAceptar.style.width = '15vw'

    document.body.appendChild(difuminador)
    difuminador.appendChild(mensajeCont)
    mensajeCont.appendChild(mensajeTexto)
    mensajeCont.appendChild(btnAceptar)

    btnAceptar.addEventListener('click',()=>{
        difuminador.remove()
    })

})