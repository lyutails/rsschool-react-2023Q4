import style from './app.module.scss';
import { NavLink } from 'react-router-dom';
import { ApiResponseRace } from './api/api';
import grogu from './assets/grogu.png';
import bb8 from './assets/droid.png';
import wookie from './assets/wookie.png';
import rodian from './assets/rodian.png';
import hutt from './assets/hutt.png';
import moncalamari from './assets/moncalamari.png';
import ewok from './assets/ewok.png';
import human from './assets/human.png';
import sullustan from './assets/sullustan.png';
import toydarian from './assets/toydarian.png';
import trandoshan from './assets/trandoshan.png';
import aleena from './assets/aleena.png';
import besalisk from './assets/besalisk.png';
import cerean from './assets/cerean.png';
import chagrian from './assets/chagrian.png';
import clawdite from './assets/clawdite.png';
import dug from './assets/dug.png';
import gungan from './assets/gungan.png';
import iktotchi from './assets/iktotchi.png';
import kaleesh from './assets/kaleesh.png';
import kaminoan from './assets/kaminoan.png';
import mirialan from './assets/mirialan.png';
import muun from './assets/muun.png';
import nautolan from './assets/nautolan.png';
import neimodian from './assets/neimodian.png';
import pauan from './assets/pauan.png';
import quermian from './assets/quermian.png';
import skakoan from './assets/skakoan.png';
import toong from './assets/toong.png';
import togruta from './assets/togruta.png';
import twilek from './assets/twilek.png';
import vulptereen from './assets/vulptereen.png';
import xexto from './assets/xexto.png';
import zabrak from './assets/zabrak.png';
import tholothian from './assets/tholothian.png';
import geonosian from './assets/geonosian.png';
import keldor from './assets/keldor.png';

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
  Aleena: aleena,
  Besalisk: besalisk,
  Cerean: cerean,
  Chagrian: chagrian,
  Clawdite: clawdite,
  Dug: dug,
  Gungan: gungan,
  Iktotchi: iktotchi,
  Kaleesh: kaleesh,
  Kaminoan: kaminoan,
  Mirialan: mirialan,
  Muun: muun,
  Nautolan: nautolan,
  Neimodian: neimodian,
  "Pau'an": pauan,
  Quermian: quermian,
  Skakoan: skakoan,
  Toong: toong,
  Togruta: togruta,
  "Twi'lek": twilek,
  Vulptereen: vulptereen,
  Xexto: xexto,
  Zabrak: zabrak,
  Tholothian: tholothian,
  Geonosian: geonosian,
  'Kel Dor': keldor,
};

export type CardSpeciesProps = Omit<ApiResponseRace, 'url'>;
interface Props {
  species: ApiResponseRace;
  page: number;
}

export function Card({ species, page }: Props) {
  const id = species.url?.split('/').at(-2) || '';
  return (
    <NavLink to={`/page=${page}/species/${id}`} className={style.card_link}>
      <div className={style.card_wrapper}>
        <div className={style.card_fancy}>
          {'>>>'}
          {species.name}
          {'<<<'}
        </div>
        <img
          className={style.card_pic}
          src={speciesPics[species.name]}
          alt="image"
        />
        <div className={style.card_text}>
          <div className={`${style.card_info} ${style.name}`}>
            Name: {species.name}
          </div>
          <div className={style.card_info}>
            Classification: {species.classification}
          </div>
          <div className={style.card_info}>
            Average Lifespan: {species.average_lifespan}
          </div>
          <div className={style.card_info}>Language: {species.language}</div>
        </div>
      </div>
    </NavLink>
  );
}
