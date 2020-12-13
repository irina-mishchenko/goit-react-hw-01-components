import FriendsListItem from './../FriendsListItem/FriendsListItem';

import PropTypes from 'prop-types';

import s from './FriendsList.module.css';

function FriendsList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <FriendsListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default FriendsList;
