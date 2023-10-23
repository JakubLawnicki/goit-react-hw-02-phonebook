import styles from './contactList.module.css';

export function ContactList({ list }) {
  return (
    <ul className={styles['contact-list']}>
      {list.map(item => (
        <li className={styles.contact}>{item.name}</li>
      ))}
    </ul>
  );
}
