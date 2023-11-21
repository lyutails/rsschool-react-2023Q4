import { ApiResponseRace } from '../api/api';
import style from './card-details.module.scss';

export function Details(props: ApiResponseRace) {
  return (
    <div className={style.card_wrapper}>
      <div className={style.card_text}>
        <h3 className={`${style.card_info} ${style.name}`}>
          Name: {props.name}
        </h3>
        <div className={style.card_info}>
          Classification: {props.classification}
        </div>
        <div className={style.card_info}>Designation: {props.designation}</div>
        <div className={style.card_info}>
          Average Height: {props.average_height}
        </div>
        <div className={style.card_info}>Hair Colors: {props.hair_colors}</div>
        <div className={style.card_info}>Skin Colors: {props.skin_colors}</div>
        <div className={style.card_info}>Eye Colors: {props.eye_colors}</div>
        <div className={style.card_info}>
          Average Lifespan: {props.average_lifespan}
        </div>
        <div className={style.card_info}>Language: {props.language}</div>
      </div>
    </div>
  );
}
