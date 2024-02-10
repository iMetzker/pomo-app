import { HandPalm, Play } from "phosphor-react";
import {
  Homecontainer,
  StartCountdownButton,
  StopCountdownButton,
} from "../Home/styles";
import { useContext } from "react";
import { CountDown } from "../Home/components/Countdown";
import { CycleBreak } from "./components/CycleBreak";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Coffee Break"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ter no mínimo 5 minutos")
    .max(60, "O ciclo precisa ter no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>;

export function CoffeeBreak() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: "Coffee Break",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const minutes = watch("minutesAmount");
  const isSubmitDisabled = !minutes;

  return (
    <Homecontainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        {activeCycle && (
          <>
            <h1>{activeCycle?.task}</h1>
          </>
        )}

        <FormProvider {...newCycleForm}>
          <CycleBreak />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
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
