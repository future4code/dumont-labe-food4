export const timeFormat = (localeTimeString) => {
    const timeArray = localeTimeString.split("")
    timeArray.splice(5, 3)

    const hours = `${timeArray[0]}${timeArray[1]}`
    const minutes = `${timeArray[3]}${timeArray[4]}`
    const timeString = `${hours}:${minutes}`

    return timeString

}

export const timestampToDateString = (timestamp) => {
    const dateObj = new Date(timestamp)
    const date = dateObj.toLocaleDateString("pt-BR")
    const time = dateObj.toLocaleTimeString("pt-BR")

    const formatedTime = timeFormat(time)

    return { date, formatedTime }
}

export const timestampToString = (timestamp) => {
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    const dateObj = new Date(timestamp)
    const day = dateObj.getDate()
    const month = dateObj.getMonth("pt-BR")
    const year = dateObj.getFullYear()

    return `${day} de ${months[month]} ${year}`
}

export const cpfMask = (value) => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}