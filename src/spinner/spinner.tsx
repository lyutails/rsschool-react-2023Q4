import style from './hamster.module.scss';

export default function Spinner() {
  return (
    <div className={style.spinner_overlay}>
      <div className={style.hamster_spinner}>
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className={style['wheel-and-hamster']}
        >
          <div className={style.wheel}></div>
          <div className={style.hamster}>
            <div className={style.hamster__body}>
              <div className={style.hamster__head}>
                <div className={style.hamster__ear}></div>
                <div className={style.hamster__eye}></div>
                <div className={style.hamster__nose}></div>
              </div>
              <div
                className={`${style.hamster__limb} ${style['hamster__limb--fr']}`}
              ></div>
              <div
                className={`${style.hamster__limb} ${style['hamster__limb--fl']}`}
              ></div>
              <div
                className={`${style.hamster__limb} ${style['hamster__limb--br']}`}
              ></div>
              <div
                className={`${style.hamster__limb} ${style['hamster__limb--bl']}`}
              ></div>
              <div className={style.hamster__tail}></div>
            </div>
          </div>
          <div className={style.spoke}></div>
        </div>
      </div>
    </div>
  );
}
