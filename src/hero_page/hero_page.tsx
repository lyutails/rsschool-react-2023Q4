import React, { useCallback, useEffect, useState } from 'react';
import { searchSpecies } from '../api/api';
import { SpeciesDTO } from '../card';
import { Header } from '../header/header';
import { BottomSection } from '../bottom_section/bottom_section';
import Spinner from '../spinner';
import style from '../app.module.scss';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';
import { PaginationButtons } from '../pagination-buttons/pagination-buttons';

export function HeroPage() {
  const inputValueLocal = localStorage.getItem('searchValue');
  const [species, setSpecies] = useState<SpeciesDTO[]>([]);
  const [searchValue, setSearchValue] = useState(
    inputValueLocal ? inputValueLocal : ''
  );
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchSpecies = useCallback(
    async (inputValue: string) => {
      setisLoading(true);
      const data = await searchSpecies(inputValue, page);
      const species = data.results;
      console.log(species);
      setSpecies(species);
      setisLoading(false);
    },
    [page]
  );

  useEffect(() => {
    fetchSpecies(searchValue);
  }, [fetchSpecies, searchValue]);

  return (
    <div className={style.main_wrapper}>
      <div id="detail">
        <Outlet />
      </div>
      <Header
        searchValue={searchValue}
        fetchSpecies={(inputValue) => fetchSpecies(inputValue)}
        changeSearchValue={setSearchValue}
      />
      <PaginationButtons
        page={page}
        changePageMinus={() => setPage(page - 1)}
        changePagePlus={() => setPage(page + 1)}
        // changePage={setPage}
        changePage={(roma: number) => setPage(roma)}
      ></PaginationButtons>
      {isLoading ? <Spinner /> : <BottomSection species={species} />}
      <Footer />
    </div>
  );
}
