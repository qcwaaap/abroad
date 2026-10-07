import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} mono`}>
        <div>elsewhere/now<br />Vol. 01, 2026</div>
        <div>Words &amp; photos<br />[AUTHOR NAME]</div>
        <div>Set in Hanken Grotesk<br />&amp; IBM Plex Mono</div>
        <div>[YOUR DOMAIN]<br />[INSTAGRAM HANDLE]</div>
      </div>
      <p className={`${styles.copy} mono`}>
        © 2026 elsewhere/now · <a href="#notes">Notes</a> · <a href="#chapters">Chapters</a> ·{' '}
        <a href="#letter">Letter</a>
      </p>
    </footer>
  );
}
