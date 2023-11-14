import { useContext, useState } from 'react';
import style from '../app.module.scss';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../hero_page/hero_page';

interface Props {
  fetchSpecies: (inputValue: string) => void;
  changeSearchValue: (data: string) => void;
  changePage: (data: number) => void;
}

export function Header({ fetchSpecies, changeSearchValue, changePage }: Props) {
  const search = useContext(SearchContext);

  const [hasError, setHasError] = useState<boolean>(false);
  const navigate = useNavigate();

  if (hasError) {
    throw new Error('lalala');
  }
  return (
    <div className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.header_logic}>
          <input
            placeholder="Search..."
            value={search}
            className={style.header_input}
            onChange={(e): void => {
              changeSearchValue(e.target.value);
              e.target.value.length
                ? localStorage.setItem('searchValue', `${e.target.value}`)
                : localStorage.removeItem('searchValue');
              changePage(1);
              const query = e.target.value.length
                ? `/page/1/search/${e.target.value}`
                : `/page/1`;
              navigate(query);
            }}
          ></input>
          <button
            className={style.cross}
            onClick={() => {
              localStorage.removeItem('searchValue');
              changeSearchValue('');
              fetchSpecies('');
              changePage(1);
              navigate(`/page/1`);
            }}
          >
            cross
          </button>
          <button
            value={search}
            className={style.header_search}
            onClick={() => {
              /* changeSearchValue(e.target.value);
              e.target.value.length
                ? localStorage.setItem('searchValue', `${e.target.value}`)
                : localStorage.removeItem('searchValue'); */
              fetchSpecies(search);
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
