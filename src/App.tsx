import "./App.css";

import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';


export default function App() {

 
  return (
    <div className="App">
  
          <TasksProvider>
      <h1>Tasks with context API and useReducer</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
      <header className="App-header">
   
      </header>
      <main>
       
      </main>
    
    </div>
  );
}
