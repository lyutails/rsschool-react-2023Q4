import { useNavigate } from 'react-router-dom';
import style from '../app.module.scss';

interface Props {
  page: number;
  changePageMinus: () => void;
  changePagePlus: () => void;
  changePage: (data: number) => void;
  totalCount: number;
  search: string;
}

export function PaginationButtons({
  page,
  changePage,
  totalCount,
  search,
}: Props) {
  const maxPage = Math.ceil(totalCount / 10);
  const minPage = 1;
  const navigate = useNavigate();
  return (
    <div className={style.pagination_wrapper}>
      <button
        onClick={() => {
          page > minPage && changePage(page - 1);
          if (search !== '' && page > minPage) {
            navigate(`/page/${page - 1}/search/${search}`);
          } else {
            navigate(`/page/${page - 1}`);
          }
        }}
      >
        previous
      </button>
      <div>
        {page}/{maxPage}
      </div>
      <button
        onClick={() => {
          page < maxPage && changePage(page + 1);
          if (search !== '' && page < maxPage) {
            navigate(`/page/${page + 1}/search/${search}`);
          } else {
            navigate(`/page/${page + 1}`);
          }
        }}
      >
        next
      </button>
    </div>
  );
}
