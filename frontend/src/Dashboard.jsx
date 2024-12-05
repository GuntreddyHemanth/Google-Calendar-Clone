import { UserButton } from '@clerk/clerk-react';
// import { useClerk } from '@clerk/clerk-react';
// import { Button } from './components/ui/button';
import Header from './headers/Header';
import MainView from './mainview/MainView';


const Dashboard = () => {
  // const { user } = useClerk();

  return (
    <div>
      <Header/>
      <UserButton />
      <MainView/>
    </div> 
  );
};

export default Dashboard;