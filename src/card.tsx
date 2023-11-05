import React from 'react';
import style from './app.module.scss';

export interface SpeciesDTO {
  image: string;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  hair_colors: string;
  skin_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
  people?: string[];
  films?: string[];
  url?: string;
}

type CardSpeciesProps = Omit<SpeciesDTO, 'url'>;

export function Card(props: CardSpeciesProps) {
  return (
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
