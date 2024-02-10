import { Header } from "../../components/Header";
import { PopUpTutorial } from "../../components/PopUpTutorial";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <PopUpTutorial />
      <Outlet />
      
      <p>Desenvolvido por Ivny Metzker</p>
    </LayoutContainer>
  );
}
