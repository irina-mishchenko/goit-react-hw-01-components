import Profile from './UserProfile/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
