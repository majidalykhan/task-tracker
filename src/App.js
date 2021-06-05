import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

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

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

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
        <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
        {
          //If showAddTask is equal to true then AddTask
        showAddTask && <AddTask onAdd={addTask}/>
        }

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
