import React, { createElement as create, useState} from 'react';

function App() {
    const [count, setCount] = useState(0)
    return create('div', {className: 'container'}, [
      create('h1', {className: 'font-bold', key: 1}, `${count}`),
      create('button', {
        className: 'py-2 px-4 border', 
        key: 2,
        onClick: () => setCount(count + 1)
      }, 'Click me')
    ])
  }