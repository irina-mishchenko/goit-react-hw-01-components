import PropTypes from 'prop-types';

import s from './Description.module.css';

export default function Description({ name, tag, location, avatar }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt={name} className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
}

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
