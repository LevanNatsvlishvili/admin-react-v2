import queryString from 'query-string';

const buildQuery = (options) => {
  if (!options) return '';
  const notEmptyObjects = Object.entries(options).reduce((acc, val) => {
    const [objKey, objValue] = val;
    return objValue ? { [objKey]: objValue, ...acc } : acc;
  }, {});
  const optionsStringify = queryString.stringify(notEmptyObjects);
  return optionsStringify ? `?${optionsStringify}` : '';
};

export default buildQuery;
