export const getSocialMediaName = (link: string): string => {
  if (link.includes("facebook")) {
    return "Facebook";
  } else if (link.includes("instagram")) {
    return "Instagram";
  } else if (link.includes("vk")) {
    return "VK";
  } else if (link.includes("twitter")) {
    return "Twitter";
  } else if (link.includes("linkedin")) {
    return "Linkedin";
  } else if (link.includes("t.me")) {
    return "Telegram";
  } else {
    return "Другие сети";
  }
};
