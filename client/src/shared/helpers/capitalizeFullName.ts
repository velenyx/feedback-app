export const capitalizeFullName = (fullName: string): string => {
  if (fullName) {
    const capitalizeName = fullName
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ");

    return capitalizeName;
  } else {
    return "";
  }
};
