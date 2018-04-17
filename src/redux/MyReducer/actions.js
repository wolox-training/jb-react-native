export const getBooks = (books) => ({
  type: 'GET_BOOKS',
  books
});

export const submitFilters = (filter, value) => ({
  type: 'SUBMIT_FILTERS',
  filter,
  value
});

