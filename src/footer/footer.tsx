import style from './footer.module.scss';

export function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_wrapper}>
        <a className={style.footer_rsschool_logo} href="https://rs.school/"></a>
        <a className={style.footer_lyutails} href="https://github.com/lyutails">
          lyutails
        </a>
      </div>
    </div>
  );
}
