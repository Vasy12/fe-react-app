import { BASE_URL, API_KEY } from './../configs/api.js';
import queryString from 'query-string';

/**
 *
 * @param {object} [query]
 * @param {number} [query.page]
 * @param {number} [query.results]
 * @param {string} [query.seed]
 * @param {Array<string>} [query.inc]
 * @returns {Promise<object>}
 */
export const getUsers = ({
  seed = API_KEY,
  inc = ['id', 'name', 'email', 'picture'],
  ...rest
} = {}) => {
  return fetch(
    `${BASE_URL}?${queryString.stringify(
      { seed, inc, ...rest },
      { arrayFormat: 'comma' }
    )}`
  ).then(res => res.json());
};
