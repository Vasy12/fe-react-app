import React from 'react';
import Mouse from '../Mouse';
import Cat from '../Cat';

function MouseTracker(props) {
  return (
    <>
      <h1>Перемещайте курсор мыши!</h1>
      <Mouse render={mouse => <Cat mouse={mouse} />} />
    </>
  );
}

export default MouseTracker;
