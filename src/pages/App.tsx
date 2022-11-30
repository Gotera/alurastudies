import React, { useState } from 'react';
import Cronometer from '../Components/Cronometer';
import Formulary from '../Components/Formulary';
import List from '../Components/List';
import { ITask } from '../Components/types/tarefa';
import style from'./App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([])
  return (
    <div className={ style.AppStyle }>
      <Formulary setTasks={ setTasks }/>
      <List 
        tasks={ tasks }
      />
      <Cronometer />
    </div>
  );
}

export default App;
