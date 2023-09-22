import { HandPalm, Play } from "phosphor-react";
import {
  Homecontainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { CountDown } from "./components/Countdown";
import { NewCycleForm } from './components/NewCycleForm';

// criando um schema de validação, utilizando o zod
// zod.object pq está sendo  retornado um objeto em handleCreateNewCycle com as duas informações de register
const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ter no mínimo 5 minutos")
    .max(60, "O ciclo precisa ter no máximo 60 minutos"),
});

// utilizando o potencial do zod em se integrar ao typescript, extraindo do schema a typagem
type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  // register  recebe um nome do input e retorna alguns métodos para trabalharmos com input : onChange, onBlur, onFocus ...
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  }); // retorna um objeto

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
              } else {
                return cycle;
              }
            })
          );

          setAmountSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    //removendo o intervalo anterior para nao  interferir no timer
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

  // data recebe os dados que são retornados
  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);

    reset(); // volta para os  valores definidos em defaultValues
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60); // arredonda para baixo
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0"); // padStart preencheuma string com algum caracter específico caso ela não tenha (primeiro parâmetro = tamanho que deve ter, secundo parâmetro = com o que deve ser preenchido)
  const seconds = String(secondsAmount).padStart(2, "0");

  // console.log(formState.errors) // acessa a variável errors
  // watch observa  os campos, parecido com o useState / observa o campo nomeado pelo {...register('task')}
  const task = watch("task");
  const isSubmitDisabled = !task;

  // mudando o tittle para aparecer a minutagem
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle?.task}`;
      console.log(task);
    }
  }, [minutes, seconds, activeCycle]);

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId(null);
  }

  return (
    <Homecontainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        {activeCycle && (
          <>
            <h1>{activeCycle?.task}</h1>
          </>
        )}

        <NewCycleForm />
        <CountDown />
        
        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </Homecontainer>
  );
}
