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

export class Card extends React.Component<CardSpeciesProps> {
  fancyName: string;
  constructor(props: CardSpeciesProps) {
    super(props);
    this.fancyName = `>>>${props.name}<<<`;
  }

  render() {
    return (
      <div className={style.card_wrapper}>
        <div className={style.card_fancy}>{this.fancyName}</div>
        <img className={style.card_pic} src={this.props.image} alt="image" />
        <div className={style.card_text}>
          <div className={`${style.card_info} ${style.name}`}>
            Name: {this.props.name}
          </div>
          <div className={style.card_info}>
            Classification: {this.props.classification}
          </div>
          <div className={style.card_info}>
            Designation: {this.props.designation}
          </div>
          <div className={style.card_info}>
            Average Height: {this.props.average_height}
          </div>
          <div className={style.card_info}>
            Hair Colors: {this.props.hair_colors}
          </div>
          <div className={style.card_info}>
            Skin Colors: {this.props.skin_colors}
          </div>
          <div className={style.card_info}>
            Eye Colors: {this.props.eye_colors}
          </div>
          <div className={style.card_info}>
            Average Lifespan: {this.props.average_lifespan}
          </div>
          <div className={style.card_info}>Language: {this.props.language}</div>
        </div>
      </div>
    );
  }
}
