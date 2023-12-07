import React, { createContext, useContext, useReducer } from 'react';
import { TasksReducer, initialTasks } from './TasksReducer';
import {Task as inTask , Action} from './types'

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(TasksReducer, initialTasks);
  
    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  }
  
  export function useTasks() {
    const context = useContext(TasksContext);
  
    if (!context) {
      throw new Error('useTasks must be used within a TasksProvider');
    }
  
    return context;
  }
  
  export function useTasksDispatch() {
    const context = useContext(TasksDispatchContext);
  
    if (!context) {
      throw new Error('useTasksDispatch must be used within a TasksProvider');
    }
  
    return context;
  }