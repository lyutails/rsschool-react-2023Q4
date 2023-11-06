import style from './app.module.scss';
import { Link } from 'react-router-dom';
import { ApiResponseRace } from './api/api';

export type CardSpeciesProps = Omit<ApiResponseRace, 'url'>;

export function Card(props: ApiResponseRace) {
  const id = props.url?.split('/').at(-2) || '';
  console.log(props.url?.split('/'));
  return (
    <Link to={`species/${id}`}>
      <div className={style.card_wrapper}>
        <div className={style.card_fancy}>
          {'>>>'}
          {props.name}
          {'<<<'}
        </div>
        <img className={style.card_pic} src={props.image} alt="image" />
        <div className={style.card_text}>
          <div className={`${style.card_info} ${style.name}`}>
            Name: {props.name}
          </div>
          <div className={style.card_info}>
            Classification: {props.classification}
          </div>
          <div className={style.card_info}>
            Designation: {props.designation}
          </div>
          <div className={style.card_info}>
            Average Lifespan: {props.average_lifespan}
          </div>
          <div className={style.card_info}>Language: {props.language}</div>
        </div>
      </div>
    </Link>
  );
}
