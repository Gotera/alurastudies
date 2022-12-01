import { ITask } from '../../types/tarefa'
import style from '../List.module.scss'

export default function Item({ tarefa, tempo, selected, completed, id }: ITask ) {
    return (
        <li className={style.item}>
        <h3> { tarefa } </h3>
        <span> { tempo } </span>
    </li>
    )
}