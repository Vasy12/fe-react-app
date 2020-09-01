import { useState, useEffect } from 'react';

/**
 * @typedef {Object} UseDataResult
 * @property {*} data
 * @property {object} error
 * @property {boolean} isFetching
 */

/**
 *
 * @param {function:Promise<any>} getData
 * @returns {UseDataResult}
 * @returns {object.data}
 * @returns {object}
 */
function useData(getData) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    getData()
      .then(data => void (setIsFetching(false), setData(data)))
      .catch(error => void (setIsFetching(false), setError(error)));
  }, [getData]);

  return {
    data,
    error,
    isFetching,
  };
}

export default useData;
