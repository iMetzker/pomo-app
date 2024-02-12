import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SwitchContainer, LanguageButton, LanguageOptions } from "./styles";
import { GlobeSimple } from "phosphor-react";

export function SwitchLanguage() {
  const [showOptions, setShowOptions] = useState(false);
  const { i18n } = useTranslation();

  const languageOptions = [
    {
      name: "Português",
      value: "ptBR",
    },
    {
      name: "English",
      value: "en",
    },
    {
      name: "Spanish",
      value: "es",
    },
    {
      name: "French",
      value: "fr",
    },
  ];
  return (
    <SwitchContainer>
      <LanguageButton onClick={() => setShowOptions(!showOptions)}>
        <GlobeSimple size={20} />
      </LanguageButton>

      {showOptions && (
        <LanguageOptions>
          {languageOptions.map((languageOption) => (
            <button
              key={languageOption.value}
              onClick={() => {
                i18n.changeLanguage(languageOption.value);
                setShowOptions(false);
              }}
            >
              <span>{languageOption.name}</span>
            </button>
          ))}
        </LanguageOptions>
      )}
    </SwitchContainer>
  );
}
