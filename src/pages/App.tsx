import React from 'react';
import Cronometer from '../Components/Cronometer';
import Formulary from '../Components/Formulary';
import List from '../Components/List';
import style from'./App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulary />
      <List />
      <Cronometer />
    </div>
  );
}

export default App;
