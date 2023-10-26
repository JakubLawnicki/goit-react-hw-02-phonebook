// import styles from './filter.module.css';
import PropTypes from 'prop-types';

export function Filter({ filterValue }) {
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

Filter.propTypes = {
  filterValue: PropTypes.func,
};
