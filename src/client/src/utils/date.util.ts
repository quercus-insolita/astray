export const sortByDate = (data, field) => {
  return data.sort((a, b) =>
    new Date(a[field]) > new Date(b[field]) ? -1 : new Date(a[field]) < new Date(b[field]) ? 1 : 0
  );
};
