import style from './card-details.module.scss';
import { ApiResponseRace, searchASpecies } from '../api/api';
import { useParams } from 'react-router-dom';
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
    console.log(data);
    setASpecies(data);
    setisLoading(false);
  }, []);

  useEffect(() => {
    if (id === undefined) {
      throw new Error('no id found');
    }
    fetchSpecies(+id);
  }, [fetchSpecies, id]);

  //   if(aSpecies === null) {
  //     throw new Error('one species is possibly null')
  //   }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    aSpecies !== null && (
      <div className={style.details_wrapper}>
        {id}
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
