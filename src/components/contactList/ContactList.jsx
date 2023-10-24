import styles from './contactList.module.css';

export function ContactList({ list }) {
  console.log(list);
  return (
    <ul className={styles['contact-list']}>
      {list.map(item => (
        <li className={styles.contact} key={item.id}>
          {item.name}: {item.number}
        </li>
      ))}
    </ul>
  );
}
