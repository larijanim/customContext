import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.tsx';
import {Task as inTask, Action} from './types';

//https://dev.to/typescripttv/typing-react-props-in-typescript-5hal
export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks?.map((task:inTask ) => (
        <li key={task.id}>
          <TaskF task2={task} />
        </li>
      ))}
    </ul>
  );
}

function TaskF({task2}:inTask) {  /// {text,done,id}:Task   or props:task
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task2.text}
          onChange={e => {
            dispatch({   //dispatch{action.type,action.payload}
              type: 'changed',        
              task: {
                ...task2,
                text: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task2.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task2.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task2,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task2.id
        });
      }}>
        Delete
      </button>
    </label>
  );
}
