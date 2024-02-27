import { useState } from 'react'
import './App.css'
import NewGoal from './assets/components/NewGoal/NewGoal';
import Goals from './assets/components/Goals/Goals';
import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';

function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (NewGoal) =>
  setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(NewGoal));

  return (
    <div className='app'>
      <Header />
      <Goals goals={courseGoals}/>
      <NewGoal  onAddGoal={addGoalHandler}/>
      <Footer />
    </div>
  );
}

export default App;
