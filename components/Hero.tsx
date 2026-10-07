import Placeholder from './Placeholder';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={`${styles.crop} ${styles.cropTl}`} />
      <span className={`${styles.crop} ${styles.cropTr}`} />
      <h1 className={styles.title}>
        Life{' '}
        <Placeholder label="packed suitcase, flash" width="1.55em" height="0.72em" background="#B9B3A6" />
        <br />
        is not a{' '}
        <Placeholder label="empty chair" width="0.9em" height="0.72em" background="var(--accent)" labelColor="#FFFFFF" />
        <br />
        <Placeholder label="station clock" width="1.2em" height="0.72em" /> waiting
        <br />
        room.
      </h1>
      <div className={styles.bottom}>
        <p className={styles.lead}>
          Honest notes on moving abroad — what it was really like, what helped, and how to stop
          living in “after the move” and start living now.
        </p>
        <div className={styles.actions}>
          <a href="#notes" className={styles.cta}>Read the notes</a>
          <span className={styles.scribble}>not 24/7 &lt;3</span>
        </div>
      </div>
    </section>
  );
}
