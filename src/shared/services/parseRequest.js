const parseResponse = response => {
  const count = +response.headers['x-total-count'];

  return {
    data: response.data,
    total: +count,
    page: +response.config.params._page,
    totalPages: Math.ceil(count / +response.config.params._limit),
  };
};

export default parseResponse;
