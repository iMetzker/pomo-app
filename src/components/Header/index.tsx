import { HeaderContainer } from "./styles";
import { Timer, Scroll, Coffee } from "phosphor-react";
import { NavLink } from "react-router-dom";
import IconHeader from "../../assets/icons/dark-theme.svg";
import { DataFormat } from "../DataFormat";

export function Header() {

  return (
    <HeaderContainer>
      <img src={IconHeader} alt="" />
      <DataFormat />
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
