import style from '../app.module.scss';

interface Props {
  page: number;
  changePageMinus: () => void;
  changePagePlus: () => void;
  changePage: (data: number) => void;
  totalCount: number;
}

export function PaginationButtons({
  page,
  changePageMinus,
  changePagePlus,
  changePage,
  totalCount,
}: Props) {
  const maxPage = Math.ceil(totalCount / 10);
  const minPage = 1;
  return (
    <div className={style.pagination_wrapper}>
      <button
        onClick={() => {
          changePageMinus();
        }}
      >
        previous
      </button>
      <div>
        {page}/{maxPage}
      </div>
      <button
        onClick={() => {
          changePagePlus();
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          page > minPage && changePage(page - 1);
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
        }}
      >
        next
      </button>
    </div>
  );
}
