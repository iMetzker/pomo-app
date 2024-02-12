import { DateContainer } from "./styles";
import { format } from "date-fns";
import { ptBR, enUS, es, fr } from 'date-fns/locale';
import { useTranslation } from "react-i18next";

export function DataFormat() {
  const data = new Date();
  const { t } = useTranslation();

  const localeString = t('date-locale');
  const localeObject = mapLocaleStringToObject(localeString);
  const currentDate = format(data, t("date-format"), {
    locale: localeObject,
  });

  function mapLocaleStringToObject(localeString: string) {
    switch (localeString) {
      case 'pt-BR':
        return ptBR;
      case 'enUS':
        return enUS;
      case 'es':
        return es;
      case 'fr':
        return fr;
      default:
        return ptBR;
    }
  }

  function dayText(day: number) {
    const dayTextNow = [
      t("day-name-sunday"),
      t("day-name-second"),
      t("day-name-third"),
      t("day-name-fourth"),
      t("day-name-fifth"),
      t("day-name-friday"),
      t("day-name-saturday"),
    ];
    return dayTextNow[day];
  }

  function createTextDay(data: Date) {
    const dayNow = data.getDay();
    const nameDay = dayText(dayNow);
    return `${nameDay}`;
  }
  return (
    <DateContainer>
      <h1>{createTextDay(data)}</h1>
      <p>{currentDate}</p>
    </DateContainer>
  );
}
