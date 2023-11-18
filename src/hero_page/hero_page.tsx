import { createContext, useCallback, useEffect, useState } from 'react';
import { ApiResponseRace, searchSpecies } from '../api/api';
import style from '../app.module.scss';
import { BottomSection } from '../bottom_section/bottom_section';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { PaginationButtons } from '../pagination-buttons/pagination-buttons';
import Spinner from '../spinner';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state_management/store';

export const SpeciesContext = createContext<ApiResponseRace[]>([]);
export const PageContext = createContext<number>(1);
export const SearchContext = createContext<string>('');

export function HeroPage() {
  const { pageNumber, querySearch } = useParams();

  const query = querySearch ? querySearch : '';

  const userInputValue = useSelector((state: RootState) => state.search.value);

  const [species, setSpecies] = useState<ApiResponseRace[]>([]);
  const [searchValue, setSearchValue] = useState(
    userInputValue !== '' ? userInputValue : query
  );
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(pageNumber ? +pageNumber : 1);
  const [countSpecies, setCountSpecies] = useState(0);

  /* const pageCount = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch(); */

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
    <PageContext.Provider value={page}>
      <SpeciesContext.Provider value={species}>
        <SearchContext.Provider value={searchValue}>
          <div className={style.main_wrapper}>
            <Header
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
            {isLoading ? <Spinner /> : <BottomSection />}
            <Footer />
          </div>
        </SearchContext.Provider>
      </SpeciesContext.Provider>
    </PageContext.Provider>
  );
}
