import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ter no mínimo 5 minutos")
    .max(60, "O ciclo precisa ter no máximo 60 minutos"),
});

// utilizando o potencial do zod em se integrar ao typescript, extraindo do schema a typagem
type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>;


export function NewCycleForm() {

  // register  recebe um nome do input e retorna alguns métodos para trabalharmos com input : onChange, onBlur, onFocus ...
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
  
  return (
    <>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-sugestions"
          placeholder="Dê um nome para o seu projeto"
          {...register("task")}
          disabled={!!activeCycle}
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
          disabled={!!activeCycle}
        />

        <span>minutos.</span>
      </FormContainer>
    </>
  );
}
