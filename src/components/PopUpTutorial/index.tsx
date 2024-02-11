import {
  TutorialContainer,
  PopupContainer,
  PopupContent,
  CloseButton,
  OpenTutorialBtn,
} from "./styles";
import { Question, X, Timer, Scroll, Coffee } from "phosphor-react";
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
    document.body.classList.toggle("popup-open", isPopupOpen);

    const handleOutsideClick = (e) => {
      if (isPopupOpen && !e.target.closest(".popup-container")) {
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
      >
        <Question size={25} />
      </OpenTutorialBtn>

      <PopupContainer className={`popup-container`} isOpen={isPopupOpen}>
        <PopupContent>
          <CloseButton onClick={closePopup}>
            <X size={25} />
          </CloseButton>
          <h2>Sobre o Aplicativo</h2>
          <p>
            Trata-se de um aplicativo que permite colocar em prática os
            conceitos do Pomodoro, uma técnica de gerenciamento de tempo que
            pode ajudá-lo a se concentrar em qualquer tarefa, como estudar,
            escrever, programar ou pesquisar, através de intervalos
            cronometrados, conhecidos como "ciclos". <a href="https://ufsb.edu.br/proaf/proaf/dace/cqv/setor-de-promocao-a-saude-estudantil/acao-bem-estar/tecnica-pomodoro-voce-sabe-o-que-e-isso" target="_blank" >Saiba mais aqui.</a>
          </p>
          <p>
            O aplicativo oferece uma abordagem flexível, permitindo a
            personalização da duração de cada ciclo de acordo com suas
            preferências, possibilitando a transição de ciclos curtos para
            sessões de foco mais extensas.
          </p>
          <br />

          <h3>Quem está por trás da técnica?</h3>
          <p>
            A técnica Pomodoro foi introduzida por Francesco Cirillo no final
            dos anos 1980 e baseia-se na ideia de que períodos curtos e
            concentrados de trabalho são mais eficazes. Você pode se surpreender
            com os resultados que pode alcançar apenas gerenciando seu tempo!
          </p>
          <br /> <br />
          <h2>Guia de Utilização</h2>
          <p>
            <span>
              <Timer size={21} />{" "}
            </span>
            Ao abrir o aplicativo, você encontrará um timer na página inicial.
            Aqui, você pode nomear sua tarefa e definir a quantidade de minutos
            que deseja dedicar a ela. Quando o tempo chegar a zero, um som será
            disparado, indicando o final da sessão de trabalho.
          </p>
          <p>
            <span>
              <Coffee size={21} />
            </span>{" "}
            Na segunda tela, reservamos um espaço para descanso, a pausa para o
            café. Defina quantos minutos deseja relaxar, e quando o tempo se
            esgotar, um alarme o lembrará de retornar ao trabalho.
          </p>
          <p>
            <span>
              <Scroll size={21} />
            </span>{" "}
            A última tela exibe todo o histórico de ciclos realizados. Esses
            ciclos são automaticamente salvos, permitindo que você retome
            exatamente de onde parou, mesmo após fechar o aplicativo. Além
            disso, oferecemos a opção de excluir ciclos antigos ou que não façam
            mais sentido estarem alí! A exclusão de ciclos proporciona uma boa
            flexibilidade e personalização ao seu histórico.
          </p>
          <p>
            Com esse aplicativo, o foco e a produtividade estão ao alcance de
            suas mãos, proporcionando uma maneira eficaz e personalizável de
            gerenciar seu tempo e realizar suas tarefas de maneira mais
            eficiente.
          </p>
          <br /> <br />
          <h2>Deixe Um Feedback</h2>
          <p>
            Para mandar sugestões, dúvidas ou deixar uma mensagem maneira{" "}
            <a href="#">clique aqui.</a>
          </p>
        </PopupContent>
      </PopupContainer>
    </TutorialContainer>
  );
}
