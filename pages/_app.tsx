import { Provider } from 'react-redux';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { store } from '../src/state_management/store';
import ErrorBoundary from '../src/error_boundary/error_boundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}
