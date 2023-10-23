import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';

export function ContactForm({ contactName, change, add }) {
  const contactId = nanoid();

  return (
    <form
      id={contactName}
      onSubmit={e => {
        e.preventDefault();

        add(e.target.id, contactId);
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        onChange={e => {
          change(e.target.value);
        }}
        type="text"
        name="name"
        id="name"
        value={contactName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button
        id={contactName}
        onSubmit={e => {
          e.preventDefault();

          add(e.target.id, contactId);
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}
