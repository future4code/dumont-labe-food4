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
