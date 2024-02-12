import { FormContainer, MinutesAmountInput } from "../../../Home/components/NewCycleForm/style";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function CycleBreak() {
  const { t } = useTranslation();
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <>
      <FormContainer>

        <label htmlFor="minutesAmout">{t("break")}</label>
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

        <span>{t("minutes")}.</span>
      </FormContainer>
    </>
  );
}
