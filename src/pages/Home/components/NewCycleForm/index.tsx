import { FormContainer, MinutesAmountInput, TaskInput } from "./style";

export function NewCycleForm() {
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
