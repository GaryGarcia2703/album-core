function GetHour() {
    const agora = new Date()
    const hora = agora.getHours()
    console.log(`shora son ${hora}`)

    if (hora < 12) {
        return "Bom dia!"
    }

    if (hora < 19) {
        return "Boa tarde!"
    }

    return "Boa noite!"

    
}

function Saludo() {
        return (
            <span>
                {GetHour()}
            </span>
        )
    }

export default Saludo