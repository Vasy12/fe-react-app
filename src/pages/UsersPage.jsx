import React, { useState, useCallback } from 'react';
import { getUsers } from './../api';
import Spinner from './../components/Spinner';
import UsersList from './../components/UsersList';

import { useData } from '../components/hooks';

function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const getData = useCallback(
    () => getUsers({ page: currentPage }).then(data => data.results),
    [currentPage]
  );

  const { isFetching, data, error } = useData(getData);

  const goPrevPage = useCallback(
    () =>
      setCurrentPage(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue)),
    []
  );
  const goNextPage = useCallback(
    () => setCurrentPage(prevValue => prevValue + 1),
    []
  );

  return (
    <>
      <h1>USERS PAGE</h1>
      <button onClick={goPrevPage} disabled={currentPage === 1}>
        prev page
      </button>
      <button>{currentPage}</button>
      <button onClick={goNextPage}>next page</button>
      {isFetching ? <Spinner /> : <UsersList users={data ?? []} />}
    </>
  );
}

export default UsersPage;
