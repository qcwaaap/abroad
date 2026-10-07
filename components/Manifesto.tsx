import Placeholder from './Placeholder';
import styles from './Manifesto.module.css';

const light = '#E9E6DE';

export default function Manifesto() {
  return (
    <section id="now" className={styles.section}>
      <div className={styles.inner}>
        <span className={`${styles.tag} mono`}>(03) The now part</span>
        <p className={styles.text}>
          You don’t have to think about leaving ({' '}
          <Placeholder label="plane window" width="1.3em" height="0.7em" background="#5B5850" labelColor={light} />{' '}
          ) 24/7. Water the ({' '}
          <Placeholder label="plant" width="0.8em" height="0.7em" background="#6E7A5A" labelColor={light} />{' '}
          ). Learn one ({' '}
          <Placeholder label="word" width="1em" height="0.7em" background="var(--accent)" labelColor="#FFFFFF" />{' '}
          ). Cook for ({' '}
          <Placeholder label="friends" width="1.1em" height="0.7em" background="#8A6F5C" labelColor="#F4F3EE" />{' '}
          ). The future is built out of ordinary Tuesdays.
        </p>
      </div>
    </section>
  );
}
