import React from 'react';
import UsersList from './components/UsersList';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <>
      <Calendar />
      <UsersList
        users={[
          { id: 1, name: 'Test', surname: 'Testovich' },
          { id: 2, name: 'Test2', surname: 'JHGsdf' },
        ]}
      />
    </>
  );
};

export default App;
