import style from './card-details.module.scss';
import { ApiResponseRace, searchASpecies } from '../api/api';
import { NavLink, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Spinner from '../spinner';
import { Details } from './details';

export function CardDetails() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [aSpecies, setASpecies] = useState<ApiResponseRace | null>(null);

  const fetchSpecies = useCallback(async (id: number) => {
    setisLoading(true);
    if (id === undefined) {
      throw new Error('no id found');
    }
    const data = await searchASpecies(+id);
    setASpecies(data);
    setisLoading(false);
  }, []);

  useEffect(() => {
    if (id === undefined) {
      throw new Error('no id found');
    }
    fetchSpecies(+id);
  }, [fetchSpecies, id]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    aSpecies !== null && (
      <div className={style.details_wrapper}>
        <div className={style.card_top}>
          <span className={style.card_id}>{id}</span>
          <NavLink to={`/`} className={style.card_close}>
            close
          </NavLink>
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
    )
  );
}
