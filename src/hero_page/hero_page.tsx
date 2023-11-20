import { createContext, useEffect, useState } from 'react';
import { ApiResponseRace } from '../api/api';
import style from '../app.module.scss';
import { BottomSection } from '../bottom_section/bottom_section';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { PaginationButtons } from '../pagination-buttons/pagination-buttons';
import Spinner from '../spinner';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state_management/store';
import { useGetSpeciesQuery } from '../api/api';
import { totalSpeciesFound } from '../state_management/counterSlice';
import { getLoading } from '../state_management/loadingSlice';

export const SpeciesContext = createContext<ApiResponseRace[]>([]);
export const PageContext = createContext<number>(1);
export const SearchContext = createContext<string>('');

export function HeroPage() {
  const dispatch = useDispatch();

  const userInputValue = useSelector((state: RootState) => state.search.value);
  const totalSpeciesCount = useSelector(
    (state: RootState) => state.counter.value
  );
  const loadingValue = useSelector((state: RootState) => state.loading.value);

  const { pageNumber, querySearch } = useParams();

  const query = querySearch ? querySearch : '';

  const [species, setSpecies] = useState<ApiResponseRace[]>([]);

  const [page, setPage] = useState(pageNumber ? +pageNumber : 1);
  const [countSpecies, setCountSpecies] = useState(0);

  const [loading, setLoading] = useState(false);

  const { data, error, isLoading } = useGetSpeciesQuery({
    pageNumber: page,
    querySearch: userInputValue !== '' ? userInputValue : query,
  });
  if (error) {
    throw new Error(
      'smth went wrong while trying to fetch species with rtk query'
    );
  }

  useEffect(() => {
    if (data?.results !== undefined) {
      setSpecies(data?.results);
    }
    if (data?.count !== undefined) {
      setCountSpecies(data?.count);
      dispatch(totalSpeciesFound(countSpecies));
    }
    setLoading(isLoading);
    dispatch(getLoading(loading));
    console.log(loadingValue);
  }, [
    countSpecies,
    data?.count,
    data?.results,
    dispatch,
    isLoading,
    loading,
    loadingValue,
  ]);

  return (
    <PageContext.Provider value={page}>
      <SpeciesContext.Provider value={species}>
        <div className={style.main_wrapper}>
          <div className={style.store_data}>
            <div className={style.store_item}>
              Search value is saved to the store: {userInputValue}
            </div>
            <div className={style.store_item}>
              Total species count is saved to the store: {totalSpeciesCount}
            </div>
            <div className={style.store_item}>
              Current loading state is saved to the store:{' '}
              {loadingValue ? 'true' : 'false'}
            </div>
          </div>
          <Header changePage={setPage} />
          <PaginationButtons
            page={page}
            changePageMinus={() => setPage(page - 1)}
            changePagePlus={() => setPage(page + 1)}
            changePage={(roma: number) => setPage(roma)}
            totalCount={countSpecies}
            search={userInputValue}
          ></PaginationButtons>
          {isLoading ? <Spinner /> : <BottomSection />}
          <Footer />
        </div>
      </SpeciesContext.Provider>
    </PageContext.Provider>
  );
}
