import { useState } from 'react';
import style from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state_management/store';
import { makeSearch, clearSearch } from '../state_management/searchSlice';
import Link from 'next/link';

interface Props {
  changePage: (data: number) => void;
}

export function Header({ changePage }: Props) {
  const [hasError, setHasError] = useState<boolean>(false);
  // const navigate = useNavigate();

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
              value={userSearch}
              className={style.header_input}
              onChange={(e): void => {
                setUserSearch(e.target.value);
                // dispatch(makeSearch(e.target.value))
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
              setUserSearch('');
              // fetchSpecies('');
              changePage(1);
              // navigate(`/page/1`);
            }}
          >
            Cross
          </button>
          <button
            value={userSearch}
            className={style.header_search}
            onClick={() => {
              // fetchSpecies(search);
              userSearch.length
                ? dispatch(makeSearch(userSearch))
                : dispatch(clearSearch());
              changePage(1);
              /* const query = userInputValue.length
                ? `/page/1/search/${userInputValue}`
                : `/page/1`; */
              // navigate(query);
            }}
          >
            Search and Save
          </button>
          <button
            className={style.header_error}
            onClick={() => setHasError(true)}
          >
            Get Error
          </button>
          <Link href="/about" className={style.cross}>
            About
          </Link>
        </div>
      </div>
      <div className={style.grogu_looking}></div>
    </div>
  );
}
