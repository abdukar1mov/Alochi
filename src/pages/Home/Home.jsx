import React from 'react'
import Topbar from '../../components/TopBar/Topbar';
import MotivationGap from '../../components/HomeComponents/MotivationGap/MotivationGap';
import TaskCards from '../../components/HomeComponents/TaskCards/TaskCards';
import DailyTasks from '../../components/HomeComponents/DailyTasks/DailyTasks';

const Home = () => {
  return (
    <div>
      <Topbar/>
      <MotivationGap/>
      <TaskCards/>
      <DailyTasks/>
    </div>
  )
}

export default Home;