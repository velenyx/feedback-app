type SocialMediaNamesType = {
  [key: string]: string;
};

const socialMediaNames: SocialMediaNamesType = {
  facebook: "Facebook",
  instagram: "Instagram",
  vk: "VK",
  twitter: "Twitter",
  linkedin: "Linkedin",
  "t.me": "Telegram",
};

export const getSocialMediaName = (link: string): string => {
  const socialMediaName = Object.keys(socialMediaNames).find((name) =>
    link.includes(name)
  );
  return socialMediaName ? socialMediaNames[socialMediaName] : "Другие сети";
};
