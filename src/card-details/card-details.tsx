import style from './card-details.module.scss';

import grogu from '../assets/grogu.png';
import bb8 from '../assets/droid.png';
import wookie from '../assets/wookie.png';
import rodian from '../assets/rodian.png';
import hutt from '../assets/hutt.png';
import trandoshan from '../assets/trandoshan.png';
import moncalamari from '../assets/moncalamari.png';
import ewok from '../assets/ewok.png';
import human from '../assets/human.png';
import sullustan from '../assets/sullustan.png';
import toydarian from '../assets/toydarian.png';
import { Card, SpeciesDTO } from '../card';

interface Props {
  species: SpeciesDTO[];
}

const speciesPics: Record<string, string> = {
  "Yoda's species": grogu,
  Droid: bb8,
  Wookie: wookie,
  Human: human,
  Rodian: rodian,
  Hutt: hutt,
  Trandoshan: trandoshan,
  'Mon Calamari': moncalamari,
  Ewok: ewok,
  Sullustan: sullustan,
  Toydarian: toydarian,
};

export function CardDetails(props: Props) {
  return (
    <div className={style.content_wrapper}>
      {props.species.map((aSpecies) => (
        <Card
          key={aSpecies.url}
          image={speciesPics[aSpecies.name]}
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
      ))}
    </div>
  );
}
