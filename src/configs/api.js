export const USER = {
  baseUrl: 'https://randomuser.me/api/',
  get: {
    users: {
      defaultQueryParams: {
        page: 1,
        seed: 'fe 2020-1',
        results: 20,
        inc: ['id', 'name', 'gender', 'email', 'picture'],
      },
      allowedQueryParams: ['page', 'seed', 'results', 'inc'],
    },
  },
};
