
export function formatDate(date: Date) {
  const dateStr = (new Date(date)).toLocaleDateString()
  const timeStr = (new Date(date)).toLocaleTimeString()
  let label = `${dateStr} ${timeStr}`
  const elapsedSec = Math.floor(Date.now() - date.getTime() )/ 1000
  const elapsedMin = Math.floor(elapsedSec / 60)
  const elapsedHour = Math.floor(elapsedSec / 60 / 60)
  const elapsedDay = Math.floor(elapsedSec / 60 / 60 / 24)
  const elapsedMonth = Math.floor(elapsedSec / 60 / 60 / 24 / 30)
  const elapsedYear = Math.floor(elapsedSec / 60 / 60 / 24 / 30 / 12)
  if (elapsedSec < 60) {
    label = "just now"
  } else if (elapsedMin < 60) {
    label = `${elapsedMin} mins ago`
  } else if (elapsedHour < 24) {
    label = `${elapsedHour} hours ago`
  } else if (elapsedDay < 30) {
    label = `${elapsedDay} days ago`
  } else if (elapsedMonth < 12) {
    label = `${elapsedMonth} months ago`
  } else {
    label = `${elapsedYear} years ago`
  }
  return label
}
