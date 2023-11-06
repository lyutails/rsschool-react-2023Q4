import React, { useState } from 'react';
import style from '../app.module.scss';

interface Props {
  searchValue: string;
  fetchSpecies: (inputValue: string) => void;
  changeSearchValue: (data: string) => void;
}

export function Header({
  searchValue,
  fetchSpecies,
  changeSearchValue,
}: Props) {
  const [hasError, setHasError] = useState<boolean>(false);

  if (hasError) {
    throw new Error('lalala');
  }
  return (
    <div className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.header_logic}>
          <input
            placeholder="Search..."
            value={searchValue}
            className={style.header_input}
            onChange={(e): void => {
              changeSearchValue(e.target.value);
            }}
          ></input>
          <button
            className={style.cross}
            onClick={() => {
              localStorage.removeItem('searchValue');
              changeSearchValue('');
              fetchSpecies('');
            }}
          >
            cross
          </button>
          <button
            className={style.header_search}
            onClick={() => {
              fetchSpecies(searchValue);
              localStorage.setItem('searchValue', `${searchValue}`);
            }}
          ></button>
          <button
            className={style.header_error}
            onClick={() => setHasError(true)}
          >
            Get Error
          </button>
        </div>
      </div>
      <div className={style.grogu_looking}></div>
    </div>
  );
}
