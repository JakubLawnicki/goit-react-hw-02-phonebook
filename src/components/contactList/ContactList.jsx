import styles from './contactList.module.css';

export function ContactList({ list, filter }) {
  console.log(list);
  if (filter === '') {
    return (
      <ul className={styles['contact-list']}>
        {list.map(item => (
          <li className={styles.contact} key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    );
  } else {
    let dispName;
    let dispNumber;
    let id;
    list.forEach(contact => {
      if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
        dispName = contact.name;
        dispNumber = contact.number;
        id = contact.id;
      }
    });
    return (
      <ul className={styles['contact-list']}>
        <li className={styles.contact} key={id}>
          {dispName}: {dispNumber}
        </li>
      </ul>
    );
  }
}
