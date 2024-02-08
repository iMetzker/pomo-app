import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

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
