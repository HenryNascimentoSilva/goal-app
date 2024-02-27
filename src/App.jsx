import { useState } from 'react'
import './App.css'
import NewGoal from './components/NewGoal/NewGoal';
import Goals from './components/Goals/Goals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
