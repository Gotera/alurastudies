import React, { useState } from 'react';
import Button from '../Button';
import { ITask } from '../types/tarefa';
import style from './Formulary.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
  }

  function Formulary({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");
    function addTask(evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault();
      setTasks(previousTasks => 
        [
          ...previousTasks,
          {
            task,
            time,
            selected: false,
            completed: false,
            id: uuidv4()
          }
        ]
      )
      setTask("");
      setTime("00:00");
    }
    return (
        <form 
            className={ style.novaTarefa }
            onSubmit={ addTask }
        >
            <div className={ style.inputContainer }>
                <label htmlFor="tarefa">
                    Adicione um novo Estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa"
                    id="tarefa" 
                    value={ task } 
                    onChange={evento => setTask(evento.target.value) }
                    placeholder="O que você quer estudar" 
                    required 
                />
            </div>
            <div className={ style.inputContainer }>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time" 
                    step="1" 
                    name="tempo" 
                    value={ time }
                    onChange={evento => setTime(evento.target.value)}
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                    required
                />
            </div>
            <Button type="submit"> 
                Adicionar 
            </Button>
        </form>
    )
}


// class Formulary extends React.Component<{
//     setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
// }> {
//     state= {
//         tarefa: "",
//         tempo: "00:00"
//     }

//     addTask(evento: React.FormEvent<HTMLFormElement>) {
//         evento.preventDefault();
//         this.props.setTasks(oldTasks => 
//             [
//                 ...oldTasks, 
//                 {
//                     ...this.state,
//                     selected: false,
//                     completed: false,
//                     id: uuidv4()
//                 }
//             ]
//         )
//         this.setState({
//             tarefa: "",
//             tempo: "00:00"
//         })
//     }
//     render() {
//         return (
//             <form 
//                 className={ style.novaTarefa }
//                 onSubmit={ this.addTask.bind(this) }
//             >
//                 <div className={ style.inputContainer }>
//                     <label htmlFor="tarefa">
//                         Adicione um novo Estudo
//                     </label>
//                     <input 
//                         type="text" 
//                         name="tarefa"
//                         id="tarefa" 
//                         value={ this.state.tarefa} 
//                         onChange={evento => this.setState({...this.state, tarefa: evento.target.value}) }
//                         placeholder="O que você quer estudar" 
//                         required 
//                     />
//                 </div>
//                 <div className={ style.inputContainer }>
//                     <label htmlFor="tempo">
//                         Tempo
//                     </label>
//                     <input 
//                         type="time" 
//                         step="1" 
//                         name="tempo" 
//                         value={ this.state.tempo }
//                         onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
//                         id="tempo" 
//                         min="00:00:00" 
//                         max="01:30:00" 
//                         required
//                     />
//                 </div>
//                 <Button type="submit"> 
//                     Adicionar 
//                 </Button>
//             </form>
//         )
//     }
// }

export default Formulary;