import { useCallback, useEffect, useState } from 'react';
import { ApiResponseRace, searchSpecies } from '../api/api';
import style from '../app.module.scss';
import { BottomSection } from '../bottom_section/bottom_section';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { PaginationButtons } from '../pagination-buttons/pagination-buttons';
import Spinner from '../spinner';
import { useParams } from 'react-router-dom';

export function HeroPage() {
  const { pageNumber, querySearch } = useParams();

  const query = querySearch ? querySearch : '';

  console.log(query);

  const inputValueLocal = localStorage.getItem('searchValue');
  const [species, setSpecies] = useState<ApiResponseRace[]>([]);
  const [searchValue, setSearchValue] = useState(
    inputValueLocal ? inputValueLocal : query
  );
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(pageNumber ? +pageNumber : 1);
  const [countSpecies, setCountSpecies] = useState(0);

  const fetchSpecies = useCallback(
    async (searchValue: string) => {
      setisLoading(true);
      const data = await searchSpecies(searchValue, page);
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
        changePage={setPage}
      />
      <PaginationButtons
        page={page}
        changePageMinus={() => setPage(page - 1)}
        changePagePlus={() => setPage(page + 1)}
        changePage={(roma: number) => setPage(roma)}
        totalCount={countSpecies}
        search={searchValue}
      ></PaginationButtons>
      {isLoading ? (
        <Spinner />
      ) : (
        <BottomSection species={species} page={page} search={searchValue} />
      )}
      <Footer />
    </div>
  );
}
