// import React, { useEffect, useState } from 'react';

// const UserFetchComponent = () => {
//   const [name, setName] = useState('');

//     const fetchUser = async () => {
//         fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()).then(data => setName(data.name));
//     }
//   useEffect(() => {
//       fetchUser();
//   }, []);

//   return <div data-testid="username">{name}</div>;
// };

// export default UserFetchComponent;

import React, { useEffect, useState } from 'react';

const UserFetchComponent = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();
      setName(data.name);
    };
    fetchUser();
  }, []);

  return <div data-testid="username">{name}</div>;
};

export default UserFetchComponent;
