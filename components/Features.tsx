import Placeholder from './Placeholder';
import { notes } from '@/data/notes';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section id="notes" className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>12 notes<br />on moving</h2>
        <p className={`${styles.hint} mono`}>
          (In no particular order.) Each note is one look at the move: a photo, a number, one line
          you can keep.
        </p>
      </div>
      <div className={styles.grid}>
        {notes.map((n) => (
          <article key={n.no} className={styles.card}>
            <Placeholder label={n.photo} block background={n.tone} className={styles.photo}>
              <span className={`${styles.date} mono`}>{n.date}</span>
            </Placeholder>
            <div className={styles.row}>
              <span className={`${styles.no} mono`}>({n.no})</span>
              <h3 className={styles.cardTitle}>{n.title}</h3>
            </div>
            <p className={styles.line}>{n.line}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
