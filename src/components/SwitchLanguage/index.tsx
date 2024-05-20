import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SwitchContainer, LanguageButton, LanguageOptions } from "./styles";
import { GlobeSimple } from "phosphor-react";

export function SwitchLanguage() {
  const [showOptions, setShowOptions] = useState(false);
  const switchRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();

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
      name: "Español",
      value: "es",
    },
    {
      name: "Français",
      value: "fr",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (switchRef.current && !switchRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [switchRef]);

  return (
    <SwitchContainer ref={switchRef}>
      <LanguageButton onClick={() => setShowOptions(!showOptions)} title={t("select-lang")}>
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
