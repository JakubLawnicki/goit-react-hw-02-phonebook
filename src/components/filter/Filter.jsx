// import styles from './filter.module.css';

export function Filter({ filter, filterValue }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => {
          filterValue(e.target.value);
        }}
      />
    </div>
  );
}
