import { ITask } from '../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void;
}

export default function Item(
    { 
        tarefa, 
        tempo, 
        selected, 
        completed, 
        id, 
        selectTask 
    }: Props ) {
    return (
        <li 
            className=
            {
                `
                    ${style.item} 
                    ${selected ? style.itemSelecionado : ''} 
                `
            }
            onClick={() => selectTask(
                {
                tarefa, 
                tempo, 
                selected, 
                completed, 
                id, 
                })
            }
        >
        <h3> { tarefa } </h3>
        <span> { tempo } </span>
    </li>
    )
}