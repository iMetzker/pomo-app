import {
  TutorialContainer,
  PopupContainer,
  PopupContent,
  CloseButton,
  OpenTutorialBtn,
} from "./styles";
import {
  Question,
  X,
  Timer,
  Scroll,
  Coffee,
  GlobeSimple,
  MusicNoteSimple
} from "phosphor-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function PopUpTutorial() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { t } = useTranslation();

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("popup-open", isPopupOpen);

    const handleOutsideClick = (e: MouseEvent) => {
      if (isPopupOpen && e.target && !!(e.target as HTMLElement).closest(".popup-container")) {
        closePopup();
      }
    };

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isPopupOpen]);

  return (
    <TutorialContainer>
      <OpenTutorialBtn
        onClick={openPopup}
        className={isPopupOpen ? "active" : ""}
        title={t("title-help")}
      >
        <Question size={25} />
      </OpenTutorialBtn>

      <PopupContainer className={`popup-container`} isOpen={isPopupOpen}>
        <PopupContent>
          <CloseButton onClick={closePopup}>
            <X size={25} />
          </CloseButton>
          <h2>{t("about-app")}</h2>
          <p>
          {t("about-p1")}
            <a
              href="https://ufsb.edu.br/proaf/proaf/dace/cqv/setor-de-promocao-a-saude-estudantil/acao-bem-estar/tecnica-pomodoro-voce-sabe-o-que-e-isso"
              target="_blank"
            >
              {t("more-here")}
            </a>
          </p>
          <p>
          {t("about-p2")}
          </p>
          <br />
          <h3>{t("pomo-author")}</h3>
          <p>
          {t("pomo-p1")}
          </p>
          <br /> <br />
          <h2>{t("tutorial")}</h2>
          <p>
            <span>
              <Timer size={21} />{" "}
            </span>
            {t("tutorial-p1")}
          </p>
          <p>
            <span>
              <Coffee size={21} />
            </span>{" "}
            {t("tutorial-p2")}
          </p>
          <p>
            <span>
              <Scroll size={21} />
            </span>{" "}
            {t("tutorial-p3")}
          </p>
          <p>
            <span>
              <GlobeSimple size={21} />
            </span>{" "}
            {t("tutorial-p4")}
          </p>
          <p>
            <span>
              <MusicNoteSimple size={21} />
            </span>
            {t("tutorial-p5")}
          </p>
          <p>
          {t("tutorial-p6")}
          </p>
        </PopupContent>
      </PopupContainer>
    </TutorialContainer>
  );
}
