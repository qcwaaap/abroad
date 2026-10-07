import styles from './Letter.module.css';

export default function Letter() {
  return (
    <section id="letter" className={styles.section}>
      <span className={`${styles.crop} ${styles.cropBl}`} />
      <span className={`${styles.crop} ${styles.cropBr}`} />
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          One letter<br />a month.<br />
          <span className={styles.accent}>Not 24/7.</span>
        </h2>
        <form className={styles.form}>
          <p className={styles.lead}>
            A short note from the road: one story, one useful thing, one reminder to look up from
            the phone.
          </p>
          <label htmlFor="email" className={`${styles.label} mono`}>Your email</label>
          <div className={styles.field}>
            <input id="email" type="email" placeholder="you@example.com" className={styles.input} />
            <button type="button" className={styles.button}>Subscribe</button>
          </div>
          <div className={styles.stickers}>
            <span className={`${styles.sticker} ${styles.pink}`}>LIVE NOW</span>
            <span className={`${styles.sticker} ${styles.dark}`}>NOT 24/7</span>
            <span className={`${styles.sticker} ${styles.lime}`}>VOL. 01</span>
          </div>
        </form>
      </div>
    </section>
  );
}
