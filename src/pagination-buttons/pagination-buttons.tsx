import style from '../app.module.scss';

interface Props {
  page: number;
  changePageMinus: () => void;
  changePagePlus: () => void;
  changePage: (data: number) => void;
}

export function PaginationButtons({
  page,
  changePageMinus,
  changePagePlus,
  changePage,
}: Props) {
  return (
    <div className={style.pagination_wrapper}>
      <button
        onClick={() => {
          changePageMinus();
        }}
      >
        previous
      </button>
      <div>{page}</div>
      <button
        onClick={() => {
          changePagePlus();
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          changePage(page - 1);
        }}
      >
        previous
      </button>
      <div>{page}</div>
      <button
        onClick={() => {
          changePage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
}
