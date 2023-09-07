import { Play } from 'phosphor-react'
import { CountDownContainer, FormContainer, Homecontainer, Separator } from './styles';

export function Home() {
  return (
    <Homecontainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmout">durante</label>
          <input id="minutesAmout" type="number" />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </Homecontainer>
  );
}
