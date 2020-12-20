import propTypes from 'prop-types';

import Description from './../Description/Description';
import Stats from './../Stats/Stats';

import s from './Profile.module.css';

function Profile({ items }) {
  const { name, tag, location, avatar, stats } = items;
  return (
    <div className={s.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}

Profile.propTypes = {
  items: propTypes.exact({
    name: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.objectOf(propTypes.number),
  }),
};

export default Profile;
