import React from 'react';
import { searchSpecies } from '../api/api';
import { SpeciesDTO } from '../card';
import { Header } from '../header/header';
import { BottomSection } from '../bottom_section/bottom_section';
import Spinner from '../spinner';

interface State {
  species: SpeciesDTO[];
  searchValue: string;
  isLoading: boolean;
}

export class HeroPage extends React.Component<Record<string, never>, State> {
  inputValueLocal = localStorage.getItem('searchValue');
  state: State = {
    species: [],
    searchValue: this.inputValueLocal ? this.inputValueLocal : '',
    isLoading: false,
  };

  async fetchSpecies(inputValue: string) {
    this.setState({ isLoading: true });
    const data = await searchSpecies(inputValue);
    const species = data.results;
    this.setState({ species });
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.fetchSpecies(this.state.searchValue);
  }

  changeSearchValue(data: string) {
    this.setState({ searchValue: data });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <Header
          searchValue={searchValue}
          fetchSpecies={(inputValue) => this.fetchSpecies(inputValue)}
          changeSearchValue={(data) => this.changeSearchValue(data)}
        />
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <BottomSection species={this.state.species} />
        )}
      </div>
    );
  }
}
