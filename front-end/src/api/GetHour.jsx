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
            <p className="text-white text-2xl text-left ml-10 font-bold tracking-tight ">
                {GetHour()}
            </p>
        )
    }

export default Saludo