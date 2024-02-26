const formatDateString = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  } as any

  const formatter = new Intl.DateTimeFormat("en-US", options)

  return formatter?.format?.(date)
}

export default formatDateString
