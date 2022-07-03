export const cutDate = date => {
  return date?.toString().substring(0, 10) + " " + date?.toString().substring(11, 16);
};
