import { Card } from '../card';
import style from '../app.module.scss';
import { ApiResponseRace } from '../api/api';
import { Outlet } from 'react-router-dom';

interface Props {
  species: ApiResponseRace[];
  page: number;
  search: string;
}

export function BottomSection(props: Props) {
  alert('would be thankful if you check me later on Tuesday');
  return (
    <div className={style.bottom_section_wrapper}>
      <div className={style.content_wrapper}>
        {props.species.map((aSpecies) => {
          return (
            <Card
              key={aSpecies.url}
              species={aSpecies}
              page={props.page}
              search={props.search}
            />
          );
        })}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
