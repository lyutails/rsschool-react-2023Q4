import { useCallback, useEffect, useState } from 'react';
import { ApiResponseRace, searchSpecies } from '../api/api';
import style from '../app.module.scss';
import { BottomSection } from '../bottom_section/bottom_section';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { PaginationButtons } from '../pagination-buttons/pagination-buttons';
import Spinner from '../spinner';

export function HeroPage() {
  const inputValueLocal = localStorage.getItem('searchValue');
  const [species, setSpecies] = useState<ApiResponseRace[]>([]);
  const [searchValue, setSearchValue] = useState(
    inputValueLocal ? inputValueLocal : ''
  );
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [countSpecies, setCountSpecies] = useState(0);

  const fetchSpecies = useCallback(
    async (inputValue: string) => {
      setisLoading(true);
      const data = await searchSpecies(inputValue, page);
      const species = data.results;
      const speciesCount = data.count;
      setSpecies(species);
      setCountSpecies(speciesCount);
      setisLoading(false);
    },
    [page]
  );

  useEffect(() => {
    fetchSpecies(searchValue);
  }, [fetchSpecies, searchValue]);

  return (
    <div className={style.main_wrapper}>
      <Header
        searchValue={searchValue}
        fetchSpecies={(inputValue) => fetchSpecies(inputValue)}
        changeSearchValue={setSearchValue}
      />
      <PaginationButtons
        page={page}
        changePageMinus={() => setPage(page - 1)}
        changePagePlus={() => setPage(page + 1)}
        changePage={(roma: number) => setPage(roma)}
        totalCount={countSpecies}
      ></PaginationButtons>
      {isLoading ? (
        <Spinner />
      ) : (
        <BottomSection species={species} page={page} />
      )}
      <Footer />
    </div>
  );
}
