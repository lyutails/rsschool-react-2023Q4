import { useContext, useState } from 'react';
import style from '../app.module.scss';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../hero_page/hero_page';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state_management/store';
import { makeSearch, clearSearch } from '../state_management/searchSlice';

interface Props {
  fetchSpecies: (inputValue: string) => void;
  changeSearchValue: (data: string) => void;
  changePage: (data: number) => void;
}

export function Header({ fetchSpecies, changeSearchValue, changePage }: Props) {
  const search = useContext(SearchContext);

  const [hasError, setHasError] = useState<boolean>(false);
  const navigate = useNavigate();

  const [userSearch, setUserSearch] = useState<string>('');

  const userInputValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  if (hasError) {
    throw new Error('lalala');
  }
  return (
    <div className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.header_logic}>
          <div className={style.header_input_wrapper}>
            <input
              placeholder="Search..."
              value={search}
              className={style.header_input}
              onChange={(e): void => {
                changeSearchValue(e.target.value);
                setUserSearch(e.target.value);
                e.target.value.length
                  ? dispatch(makeSearch(e.target.value))
                  : dispatch(clearSearch());
                changePage(1);
                const query = e.target.value.length
                  ? `/page/1/search/${e.target.value}`
                  : `/page/1`;
                navigate(query);
              }}
            ></input>
            <div className={style.header_under_input}>
              Save to store: {userInputValue}
            </div>
          </div>
          <button
            className={style.cross}
            onClick={() => {
              dispatch(clearSearch());
              changeSearchValue('');
              fetchSpecies('');
              changePage(1);
              navigate(`/page/1`);
            }}
          >
            Cross
          </button>
          <button
            value={search}
            className={style.header_search}
            onClick={() => {
              dispatch(makeSearch(userSearch));
              // fetchSpecies(search);
            }}
          >
            Search/Save
          </button>
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
