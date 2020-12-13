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

export default Profile;
