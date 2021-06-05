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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// Toogle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder}
  : task))
}
  
  return (
    <div className="container">
        <Header/>
        { 
        // If tasks length is greater than 0 then
        tasks.length > 0 ? 
        // Show tasks
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
        : //Else
        (
          'There are no tasks'
        )}
    </div>
  );
}

export default App;
