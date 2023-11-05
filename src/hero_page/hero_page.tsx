import React, { useEffect, useState } from 'react';
import { searchSpecies } from '../api/api';
import { SpeciesDTO } from '../card';
import { Header } from '../header/header';
import { BottomSection } from '../bottom_section/bottom_section';
import Spinner from '../spinner';
import style from '../app.module.scss';
import { Footer } from '../footer/footer';

export function HeroPage() {
  const inputValueLocal = localStorage.getItem('searchValue');
  const [species, setSpecies] = useState<SpeciesDTO[]>([]);
  const [searchValue, setSearchValue] = useState(
    inputValueLocal ? inputValueLocal : ''
  );
  const [isLoading, setisLoading] = useState(false);

  async function fetchSpecies(inputValue: string) {
    setisLoading(true);
    const data = await searchSpecies(inputValue);
    const species = data.results;
    setSpecies(species);
    setisLoading(false);
  }

  useEffect(() => {
    fetchSpecies(searchValue);
  }, [searchValue]);

  return (
    <div className={style.main_wrapper}>
      <Header
        searchValue={searchValue}
        fetchSpecies={(inputValue) => fetchSpecies(inputValue)}
        changeSearchValue={setSearchValue}
      />
      {isLoading ? <Spinner /> : <BottomSection species={species} />}
      <Footer />
    </div>
  );
}
