import {
  TutorialContainer,
  PopupContainer,
  PopupContent,
  CloseButton,
  OpenTutorialBtn,
} from "./styles";
import { Question } from "phosphor-react";
import { useEffect, useState } from "react";

export function PopUpTutorial() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('popup-open', isPopupOpen);

    const handleOutsideClick = (e) => {
      if (isPopupOpen && !e.target.closest('.popup-container')) {
        closePopup();
      }
    };
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isPopupOpen]);


  return (
    <TutorialContainer >
      <OpenTutorialBtn onClick={openPopup} className={isPopupOpen ? 'active' : ''}>
        <Question size={25} />
      </OpenTutorialBtn>

      <PopupContainer className={`popup-container`} isOpen={isPopupOpen}>
        <PopupContent>
          <CloseButton onClick={closePopup}>&times;</CloseButton>
          <h2>Sobre o Aplicativo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            omnis voluptatem quibusdam necessitatibus, vero, repudiandae facilis
            perspiciatis blanditiis, illo quas ipsa consequuntur ipsam
            dignissimos sunt molestiae eos repellat quo est!
          </p>
          <h2>Guia de Utilização</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            omnis voluptatem quibusdam necessitatibus, vero, repudiandae facilis
            perspiciatis blanditiis, illo quas ipsa consequuntur ipsam
            dignissimos sunt molestiae eos repellat quo est!
          </p>
          <h2>Deixe o seu feedback</h2>
          <p>
            Para mandar sugestões de melhoria, dúvidas ou deixar um feedback <a href="#">clique aqui</a>.
          </p>
        </PopupContent>
      </PopupContainer>
    </TutorialContainer>
  );
}
