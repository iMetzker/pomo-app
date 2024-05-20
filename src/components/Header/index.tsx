import { HeaderContainer } from "./styles";
import { Timer, Scroll, Coffee } from "phosphor-react";
import { ButtonTheme } from "../ButtonTheme";
import { NavLink } from "react-router-dom";
import { DataFormat } from "../DataFormat";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <ButtonTheme />
      <DataFormat />
      <nav>
        <NavLink to="/" title={t("title-timer")}>
          <Timer size={24} />
        </NavLink>

        <NavLink to="/coffee-break" title={t("title-coffee-break")}>
          <Coffee size={24} />
        </NavLink>

        <NavLink to="/history" title={t("title-history")}>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
