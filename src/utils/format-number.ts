import { toSignificantDigits } from "./to-significant"

export const formatNumber = (
  number?: any,
  digits = 4,
  trimSmallNumbers = false,
  roundInput = true
) => {
  number = Number(number)
  let formatted = isNaN(number)
    ? 0
    : toSignificantDigits(number, digits, roundInput, 18)

  const minValue = 1 / 10 ** Math.min(digits, 4)
  if (trimSmallNumbers && number > 0 && number < minValue)
    formatted = `< ${minValue}`

  return formatted
}

export const convertDate = (dateStr: any) => {
  const dateObj = new Date(dateStr * 1000)
  const timeZone = dateObj
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2]
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]

  const day = days[dateObj.getDay()]
  const date = String(dateObj.getDate()).padStart(2, "0")
  const month = months[dateObj.getMonth()]
  const year = dateObj.getFullYear()

  const hours = String(dateObj.getHours()).padStart(2, "0")
  const minutes = String(dateObj.getMinutes()).padStart(2, "0")

  const readableDate = `${day}, ${date} ${month} ${year}, ${hours}:${minutes} ${timeZone}`

  return readableDate
}

export const reviewConvertDate = (dateStr: any) => {
  const dateObj = new Date(dateStr)
  const timeZone = dateObj
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2]
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]

  const day = days[dateObj.getDay()]
  const date = String(dateObj.getDate()).padStart(2, "0")
  const month = months[dateObj.getMonth()]
  const year = dateObj.getFullYear()

  const hours = String(dateObj.getHours()).padStart(2, "0")
  const minutes = String(dateObj.getMinutes()).padStart(2, "0")

  const readableDate = `${day}, ${date} ${month} ${year} ${hours}:${minutes} ${timeZone}`

  return readableDate
}

export const formatCountdown = (seconds: number) => {
  seconds = Number(seconds)
  const d = Math.floor(seconds / (3600 * 24))
  const h = Math.floor((seconds % (3600 * 24)) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)

  const dDisplay = d > 0 ? d + "d " : ""
  const hDisplay = h > 0 ? (h < 10 ? "0" + h : h) + "h " : ""
  const mDisplay = m > 0 ? (m < 10 ? "0" + m : m) + "m " : ""
  const sDisplay = s > 0 ? (s < 10 ? "0" + s : s) + "s" : ""
  // return dDisplay + hDisplay + mDisplay + sDisplay
  return dDisplay + hDisplay + mDisplay + sDisplay
}

export const countrySelectedName = (
  value?: string,
  countryListOptions?: any
) => {
  const data = countryListOptions?.find((data?: any) => {
    const info =
      String(data?.value).trim().toLowerCase() ===
      String(value).trim().toLowerCase()
    return info
  })
  return data
}
