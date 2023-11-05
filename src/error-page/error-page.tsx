import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <div>Smth definitely went wrong on the way, try another route.</div>
        <div>{error.status}</div>
        <div>{error.statusText}</div>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  }
}
