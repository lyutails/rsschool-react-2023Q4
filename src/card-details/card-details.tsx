import style from './card-details.module.scss';
import { ApiResponseRace, useGetASpeciesQuery } from '../api/api';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../spinner';
import { Details } from './details';

export function CardDetails() {
  const { id, pageNumber, querySearch } = useParams();
  const [aSpecies, setASpecies] = useState<ApiResponseRace | null>(null);

  const { data, error, isLoading } = useGetASpeciesQuery({
    id: id,
  });
  if (error) {
    throw new Error(
      'smth went wrong while trying to fetch a species with rtk query'
    );
  }

  useEffect(() => {
    if (data !== undefined) {
      setASpecies(data);
    }
  }, [data]);

  const queryInput = querySearch
    ? `/page/${pageNumber}/search/${querySearch}`
    : `/page/${pageNumber}`;

  if (isLoading) {
    return <Spinner />;
  }
  return (
    aSpecies !== null && (
      <div className={style.details_all}>
        <div className={style.details_wrapper}>
          <div className={style.card_top}>
            <span className={style.card_id}>{id}</span>
            <Link to={queryInput} className={style.card_close}>
              close
            </Link>
          </div>
          <Details
            key={aSpecies.url}
            name={aSpecies.name}
            classification={aSpecies.classification}
            designation={aSpecies.designation}
            average_height={aSpecies.average_height}
            average_lifespan={aSpecies.average_lifespan}
            hair_colors={aSpecies.hair_colors}
            skin_colors={aSpecies.skin_colors}
            eye_colors={aSpecies.eye_colors}
            language={aSpecies.language}
          />
        </div>
        <Link to={`/`} className={style.main_close}>
          <div className={style.overlay}></div>
        </Link>
      </div>
    )
  );
}
