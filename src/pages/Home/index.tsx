import { Play } from 'phosphor-react'
import { CountDownContainer, FormContainer, Homecontainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from './styles';

export function Home() {
  return (
    <Homecontainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder='Dê um nome para o seu projeto'
          />

          <label htmlFor="minutesAmout">durante</label>
          <MinutesAmountInput
            id="minutesAmout"
            type="number" placeholder='00'
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

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </Homecontainer>
  );
}
