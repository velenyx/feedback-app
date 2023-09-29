export const capitalizeFullName = (fullName: string): string => {
  if (fullName) {
    return fullName
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
  }

  return '';
};
