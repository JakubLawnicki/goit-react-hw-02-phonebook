import styles from './contactList.module.css';

export function ContactList({ list }) {
  return (
    <ul>
      {list.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}
