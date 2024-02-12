import { Header } from "../../components/Header";
import { PopUpTutorial } from "../../components/PopUpTutorial";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Sounds } from "../../components/Sonds";

import { useTranslation } from "react-i18next";
import { SwitchLanguage } from "../../components/SwitchLanguage";

export function DefaultLayout() {
  const { t } = useTranslation();

  return (
    <LayoutContainer>
      <SwitchLanguage />
      <Header />
      <PopUpTutorial />
      <Sounds />
      <Outlet />
      <p>{t("developed")}</p>
    </LayoutContainer>
  );
}
