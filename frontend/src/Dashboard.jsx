import { UserButton } from '@clerk/clerk-react';
// import { useClerk } from '@clerk/clerk-react';
// import { Button } from './components/ui/button';
import Header from './headers/Header';


const Dashboard = () => {
  // const { user } = useClerk();

  return (
    <div>
      <Header/>
      <UserButton />
    </div> 
  );
};

export default Dashboard;