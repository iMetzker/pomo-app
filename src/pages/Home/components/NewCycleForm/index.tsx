import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function NewCycleForm() {
  const { t } = useTranslation();
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <>
      <FormContainer style={{display: activeCycle ? 'none' : 'flex'}}>
        <label htmlFor="task">{t("will-work")}</label>
        <TaskInput
          id="task"
          list="task-sugestions"
          placeholder={t("project-name")}
          disabled={!!activeCycle}
          {...register("task")}
        />

        <datalist id="task-sugestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
        </datalist>

        <label htmlFor="minutesAmout">{t("during")}</label>
        <MinutesAmountInput
          id="minutesAmout"
          type="number"
          disabled={!!activeCycle}
          step={5}
          min={5}
          max={60}
          placeholder="00"
          {...register("minutesAmount", { valueAsNumber: true })}
        />

        <span>{t("minutes")}.</span>
      </FormContainer>
    </>
  );
}
