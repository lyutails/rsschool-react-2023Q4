import React from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  searchValue: string;
  fetchSpecies: (inputValue: string) => void;
  changeSearchValue: (data: string) => void;
}

export class Header extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };
  render() {
    if (this.state.hasError) {
      throw new Error('lalala');
    }
    return (
      <div className="header">
        <input
          placeholder="Search..."
          value={this.props.searchValue}
          className="header_input"
          onChange={(e): void => {
            this.props.changeSearchValue(e.target.value);
            // this.setState((prevState) => ({
            //   ...prevState,
            //   searchValue: e.target.value,
            // }));
          }}
        ></input>
        <button
          className="cross"
          onClick={() => {
            localStorage.removeItem('searchValue');
            this.props.changeSearchValue('');
            this.props.fetchSpecies('');
          }}
        >
          cross
        </button>
        <button
          className="header_search"
          onClick={() => {
            this.props.fetchSpecies(this.props.searchValue);
            localStorage.setItem('searchValue', `${this.props.searchValue}`);
          }}
        ></button>
        <button
          className="header_error"
          onClick={() =>
            this.setState((prevState) => ({ ...prevState, hasError: true }))
          }
        >
          Get Error
        </button>
      </div>
    );
  }
}
