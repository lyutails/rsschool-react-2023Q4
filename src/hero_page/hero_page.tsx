import { createContext, useEffect, useState } from 'react';
import { ApiResponseRace } from '../api/api';
import style from '../app.module.scss';
import { BottomSection } from '../bottom_section/bottom_section';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { PaginationButtons } from '../pagination-buttons/pagination-buttons';
import Spinner from '../spinner';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state_management/store';
import { useGetSpeciesQuery } from '../api/api';

export const SpeciesContext = createContext<ApiResponseRace[]>([]);
export const PageContext = createContext<number>(1);
export const SearchContext = createContext<string>('');

export function HeroPage() {
  const { pageNumber, querySearch } = useParams();

  const query = querySearch ? querySearch : '';

  const userInputValue = useSelector((state: RootState) => state.search.value);

  const [species, setSpecies] = useState<ApiResponseRace[]>([]);

  const [page, setPage] = useState(pageNumber ? +pageNumber : 1);
  const [countSpecies, setCountSpecies] = useState(0);

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
    }
  }, [data?.count, data?.results]);

  return (
    <PageContext.Provider value={page}>
      <SpeciesContext.Provider value={species}>
        <div className={style.main_wrapper}>
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
