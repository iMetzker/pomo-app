import { Header } from "../../components/Header";
import { PopUpTutorial } from "../../components/PopUpTutorial";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Sounds } from "../../components/Sonds";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <PopUpTutorial />
      <Sounds />
      <Outlet />
      <p>Desenvolvido por Ivny Metzker</p>
    </LayoutContainer>
  );
}
