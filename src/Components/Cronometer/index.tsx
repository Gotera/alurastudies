import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import Button from "../Button";
import { ITask } from "../types/tarefa";
import Clock from "./Clock";
import style from './Cronometer.module.scss'

interface Props {
    selected: ITask | undefined,
    finishedTask: () => void;
}

export default function Cronometer({ selected, finishedTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.tempo) {
            setTime(timeToSeconds(selected.tempo))
        }
    },[selected]);

    function countDown(meter: number = 0) {
        setTimeout(() => {
            if(meter > 0) {
                setTime(meter -1);
                return countDown(meter -1);
            }
            finishedTask();
        }, 1000);
    }
    return (
        <div className={ style.cronometro }>
            <p className={ style.titulo }> Escolha um Card e inicie o cronômetro </p>
            <div className={ style.relogioWrapper }>
                <Clock time={time}/>
            </div>
            <Button onClick={() => countDown(time)}>
                Começar!
            </Button>
        </div>
    )
}