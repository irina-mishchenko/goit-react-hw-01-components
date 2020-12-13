import Profile from './Components/UserProfile/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendsList from './Components/FriendsList/FriendsList/FriendsList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
