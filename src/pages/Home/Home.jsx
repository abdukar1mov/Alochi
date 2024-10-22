import React from 'react'
import Topbar from '../../components/TopBar/Topbar';
import MotivationGap from '../../components/HomeComponents/MotivationGap/MotivationGap';
import TaskCards from '../../components/HomeComponents/TaskCards/TaskCards';

const Home = () => {
  return (
    <div>
      <Topbar/>
      <MotivationGap/>
      <TaskCards/>
    </div>
  )
}

export default Home;