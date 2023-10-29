import grogu from '../assets/grogu.png';
import bb8 from '../assets/bb-8-d-o_38bbab89.jpeg';
import wookie from '../assets/wookie.jpg';
import React from 'react';
import { Card, SpeciesDTO } from '../card';

interface Props {
  species: SpeciesDTO[];
}

const speciesPics: Record<string, string> = {
  "Yoda's species": grogu,
  Droid: bb8,
  Wookie: wookie,
};

// const speciesPicsMap = new Map([
//   ["Yoda's species", grogu],
//   ['Droid', bb8],
// ]);
// speciesPicsMap.set('Wookie', wookie);

export class BottomSection extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.species.map((aSpecies) => (
          <Card
            key={aSpecies.url}
            image={speciesPics[aSpecies.name]}
            // image={speciesPicsMap.get(aSpecies.name) ?? grogu}
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
}
