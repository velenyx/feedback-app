export const formatDate = (date: string): string => {
  return date.slice(0, 10);
};

export const getFormattedDate = (): string => {
  return new Date().toISOString().slice(0, 19).replace(' ', 'T');
};
