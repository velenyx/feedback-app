export const capitalizeFullName = (fullName: string): string => {
  const capitalizeName = fullName
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  return capitalizeName;
};
