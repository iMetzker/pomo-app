import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR, enUS, es, fr } from 'date-fns/locale';
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";
import { Trash } from "phosphor-react";
import { useTranslation } from "react-i18next";


export function History() {
  const { t } = useTranslation();
  const { cycles, deleteCycle } = useContext(CyclesContext);
  const localeString = t('date-locale');
  const localeObject = mapLocaleStringToObject(localeString);

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

  return (
    <HistoryContainer>
      <h1>{t("history")}</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>{t("task")}</th>
              <th>{t("duration")}</th>
              <th>{t("start")}</th>
              <th>{t("status")}</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} {t("minutes")}</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: localeObject,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">{t("concluded")}</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">{t("tnterrupted")}</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">{t("in-progress")}</Status>
                    )}
                  </td>
                  <td>
                    <button onClick={() => deleteCycle(cycle.id)} title="Deletar ciclo">
                      <Trash size={24} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
