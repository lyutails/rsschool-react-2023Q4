import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import style from './error-page.module.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page" className={style.error}>
        <div className={style.error_wrapper}>
          <div className={style.error_message}>
            <div className={style.error_text}>
              Smth definitely went wrong on the way, try another route.
            </div>
            <div className={style.error_status}>{error.status}</div>
            <div className={style.error_statustext}>{error.statusText}</div>
            {error.data?.message && <p>{error.data.message}</p>}
          </div>
        </div>
      </div>
    );
  }
}
