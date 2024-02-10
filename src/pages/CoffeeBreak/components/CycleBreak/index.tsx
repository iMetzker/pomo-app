import { FormContainer, MinutesAmountInput } from "../../../Home/components/NewCycleForm/style";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

export function CycleBreak() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <>
      <FormContainer>

        <label htmlFor="minutesAmout">Fazer uma pausa por</label>
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
