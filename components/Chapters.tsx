import styles from './Chapters.module.css';

const chapters = [
  {
    tag: 'Chapter A',
    title: 'Experience',
    text: 'First-person stories: the first night in a rented room, the first bureaucratic “no”, the first friend. No glossy version.',
    link: 'Read stories →',
    href: '#',
    accent: false,
  },
  {
    tag: 'Chapter B',
    title: 'Advice',
    text: 'Practical checklists for documents, money, language and the first month — short enough to read once and put away.',
    link: 'Open checklists →',
    href: '#',
    accent: false,
  },
  {
    tag: 'Chapter C',
    title: 'Now',
    text: 'How to stop refreshing visa forums at midnight and build the life you want with what you have today.',
    link: 'Start here →',
    href: '#now',
    accent: true,
  },
];

export default function Chapters() {
  return (
    <section id="chapters" className={styles.section}>
      <div className={styles.grid}>
        {chapters.map((c) => (
          <div key={c.tag} className={styles.item}>
            <span className={`${styles.tag} mono`}>{c.tag}</span>
            <h3 className={`${styles.title} ${c.accent ? styles.accent : ''}`}>{c.title}</h3>
            <p className={styles.text}>{c.text}</p>
            <a href={c.href} className={styles.link}>{c.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
