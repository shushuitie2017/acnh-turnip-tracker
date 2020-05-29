import Link from 'next/link';
import styles from '../style/layout/header.module.scss';

export default () => (
  <header className={`${styles['l-header']}`}>
    <div className="l-title">ウリとまめつぶ</div>
  </header>
);
