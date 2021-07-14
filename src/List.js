import React, { useEffect, useState } from 'react';
import './List.css';

const List = () => {
  const [list, setList] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
      fetch(`https://api.github.com/search/issues?q=${inputValue}+repo:facebook/react`, { signal })
        .then(res => res.json())
        .then(body => setList(body.items))
        .catch(err => {
          // request was probably cancelled
          // continue regardless of errors
        });
    }, 750);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    }
  }, [inputValue]);

  return (
    <div className="container">
      <input
        type="search"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className="main-input"
        placeholder="Search issues"
        autoFocus
      />
      <ul className="issues-list">
        {
          list && list.map((issue) => {
            return (
              <li
                key={issue.id}
                style={{ display: 'block' }}
                className="issues-list-item"
                tabIndex={0}
              >
                {issue.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List;