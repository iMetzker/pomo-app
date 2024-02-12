import { Header } from "../../components/Header";
import { PopUpTutorial } from "../../components/PopUpTutorial";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Sounds } from "../../components/Sonds";
import { GlobeSimple } from "phosphor-react";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <button className="switch">
        <GlobeSimple size={20} />
      </button>
      <Header />
      <PopUpTutorial />
      <Sounds />
      <Outlet />
      <p>Desenvolvido por Ivny Metzker</p>
    </LayoutContainer>
  );
}
