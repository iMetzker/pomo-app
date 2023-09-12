import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  Homecontainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

export function Home() {

  // criando um schema de validação, utilizando o zod 
  // zod.object pq está sendo  retornado um objeto em handleCreateNewCycle com as duas informações de register
  const newCicleFormValidationSchema = zod.object({
    task: zod
      .string()
      .min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'O ciclo precisa ter no mínimo 5 minutos')
      .max(60, 'O ciclo precisa ter no máximo 60 minutos'),
  })

  // interface NewCycleFormData {
  //   task: string
  //   minutesAmount: number
  // }

  // utilizando o potencial do zod em se integrar ao typescript, extraindo do schema a typagem
  type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>
  
  // register  recebe um nome do input e retorna alguns métodos para trabalharmos com input : onChange, onBlur, onFocus ...
  const { register, handleSubmit, watch, formState } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  }); // retorna um objeto

  // data recebe os dados que são retornados
  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
  }

  console.log(formState.errors)
  // watch observa  os campos, parecido com o useState / observa o campo nomeado pelo {...register('task')}
  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <Homecontainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-sugestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmout">durante</label>
          <MinutesAmountInput
            id="minutesAmout"
            type="number"
            step={5}
            min={5}
            max={60}
            placeholder="00"
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </Homecontainer>
  );
}
