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
import { Card } from '../card';
import style from '../app.module.scss';
import { ApiResponseRace } from '../api/api';
import { Outlet } from 'react-router-dom';

interface Props {
  species: ApiResponseRace[];
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

export function BottomSection(props: Props) {
  return (
    <div className={style.bottom_section_wrapper}>
      <div className={style.content_wrapper}>
        {props.species.map((aSpecies) => (
          <Card
            key={aSpecies.url}
            image={speciesPics[aSpecies.name]}
            name={aSpecies.name}
            classification={aSpecies.classification}
            average_lifespan={aSpecies.average_lifespan}
            language={aSpecies.language}
            url={aSpecies.url}
          />
        ))}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
