export function calculateTimeElapsed(postDate: Date, currentDate = new Date()) {
  if (postDate) {
    const timeElapsed = currentDate.getTime() - postDate.getTime();
    const seconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${dayWord(days)} назад`;
    } else if (hours > 0) {
      return `${hours} час назад`;
    } else if (minutes > 0) {
      return `${minutes} мин. назад`;
    } else {
      return `${seconds} сек. назад`;
    }
  }
  return "";
}

const dayWord = (day: number) => {
  if (day === 1) return "день";
  if (day >= 2 && day < 5) return "дня";
  if (day >= 5) return "дней";
  return "день";
};
