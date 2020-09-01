import { USER } from './../configs/api';
import queryString from 'query-string';
import _ from 'lodash';

/**
 *
 * @param {object} [queryParams]
 * @param {string} [queryParams.seed]
 * @param {number} [queryParams.page]
 * @param {number} [queryParams.results]
 * @param {Array<string>} [queryParams.inc]
 * @returns {Promise<any>}
 */
export const getUsers = queryParams => {
  const {
    baseUrl,
    get: {
      users: { defaultQueryParams, allowedQueryParams },
    },
  } = USER;

  const params = _.pick(
    {
      ...defaultQueryParams,
      ...queryParams,
    },
    allowedQueryParams
  );

  const queryParamsStr = queryString.stringify(params, {
    arrayFormat: 'comma',
  });

  return fetch(`${baseUrl}?${queryParamsStr}`).then(res => res.json());
};
