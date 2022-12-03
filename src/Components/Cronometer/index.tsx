import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import Button from "../Button";
import { ITask } from "../types/tarefa";
import Clock from "./Clock";
import style from './Cronometer.module.scss'

interface Props {
    selected: ITask | undefined
}

export default function Cronometer({ selected }: Props) {
    const [time, setTime] = useState<number>();
    if(selected?.tempo) {
        setTime(timeToSeconds(selected.tempo))
    }
    return (
        <div className={ style.cronometro }>
            <p className={ style.titulo }> Escolha um Card e inicie o cronômetro </p>
            <div className={ style.relogioWrapper }>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}