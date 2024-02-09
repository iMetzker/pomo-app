import { HeaderContainer } from "./styles";
import { Timer, Scroll, Coffee } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import IconHeader from "../../assets/test3-removebg-preview (1).png";

export function Header() {
  const data = new Date();

  function dayText(day: number) {
    const dayTextNow = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return dayTextNow[day];
  }

  function createTextDay(data: Date) {
    const dayNow = data.getDay();
    const nameDay = dayText(dayNow);
    return `${nameDay}`;
  }

  const currentDate = format(data, "d 'de' LLLL 'de' yyyy ", {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <img src={IconHeader} alt="" />
      <div>
        <h1>{createTextDay(data)}</h1>
        <p>{currentDate}</p>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/coffee-break" title="Coffee Break">
          <Coffee size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
