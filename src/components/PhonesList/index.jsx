import React from 'react';
import { useData, useMouse } from '../hooks';

const getPhonesApi = () => fetch('/phones.json').then(res => res.json());

function PhonesList(props) {
  const { data: phones } = useData(() => Promise.resolve([]));
  const { x, y } = useMouse();

  return (
    <article>
      <h1>
        PHONES LIST <br />
        X: {x}; Y: {y}.
      </h1>
      <ol>
        {phones &&
          phones.map(p => (
            <li key={p.id}>
              <h3>
                {p.brand} {p.model}
              </h3>
              Price: <strong>{p.price}</strong>
            </li>
          ))}
      </ol>
    </article>
  );
}

export default PhonesList;
