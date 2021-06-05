import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'



function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Eat',
        day: '6th June at 8 PM',
        reminder: true,
    },

    {
        id: 2,
        text: 'Study',
        day: '6th June at 10 PM',
        reminder: true,
    },

    {
        id: 3,
        text: 'Sleep',
        day: '6th June at 12 AM',
        reminder: false,
    },
]);
  
  return (
    <div className="container">
        <Header/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
