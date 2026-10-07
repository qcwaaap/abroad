import styles from './Header.module.css';

const bars = ['#00A3E0', '#E6007E', '#FFED00', '#141414', '#00A3E0', '#E6007E', '#FFED00', '#2348D6', '#F2A9C4', '#D9F05A'];
const grays = ['#141414', '#333333', '#555555', '#777777', '#999999', '#BBBBBB', '#DDDDDD', '#FFFFFF'];

const nav = [
  { href: '#notes', label: '(01) Notes' },
  { href: '#chapters', label: '(02) Chapters' },
  { href: '#now', label: '(03) Now' },
  { href: '#letter', label: '(04) Letter' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.service}>
        <div>elsewhere/now<br />Field notes on moving</div>
        <div>Vol. 01 — 2026<br />Experience, advice, now</div>
        <div>[YOUR DOMAIN]<br />Read · Subscribe</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.swatches}>
          {bars.map((c, i) => (
            <span key={i} className={styles.swatch} style={{ background: c }} />
          ))}
        </div>
        <nav className={`${styles.nav} mono`}>
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className={styles.swatches}>
          {grays.map((c, i) => (
            <span key={i} className={styles.swatch} style={{ background: c }} />
          ))}
        </div>
      </div>
    </header>
  );
}
