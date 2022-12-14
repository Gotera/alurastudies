import React, { useState } from 'react';
import Cronometer from '../Components/Cronometer';
import Formulary from '../Components/Formulary';
import List from '../Components/List';
import { ITask } from '../Components/types/tarefa';
import style from'./App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishedTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(previousTasks =>
      previousTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
      }
      return task;
    }))
  }}
  return (
    <div className={ style.AppStyle }>
      <Formulary setTasks={ setTasks }/>
      <List 
        tasks={ tasks }
        selectTask={selectTask}
      />
      <Cronometer 
        selected={ selected }
        finishedTask={ finishedTask }
      />
    </div>
  );
}
 
export default App;
