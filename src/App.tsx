import './app.css';
import React from 'react';
import { HeroPage } from './hero_page/hero_page';

interface State {
  isLoading: boolean;
}

export class App extends React.Component<Record<string, never>, State> {
  render() {
    return <HeroPage />;
  }
}
