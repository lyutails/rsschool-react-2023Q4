import { Card } from '../card/card';
import style from '../app/app.module.scss';
// import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { PageContext, SearchContext, SpeciesContext } from '../../pages/index';

export function BottomSection() {
  const species = useContext(SpeciesContext);
  const page = useContext(PageContext);
  const search = useContext(SearchContext);
  return (
    <div className={style.bottom_section_wrapper}>
      <div className={style.content_wrapper}>
        {species.map((aSpecies) => {
          return (
            <Card
              key={aSpecies.url}
              species={aSpecies}
              page={page}
              search={search}
            />
          );
        })}
      </div>
      {/* <div data-testid="detail" id="detail">
        <Outlet />
      </div> */}
    </div>
  );
}
