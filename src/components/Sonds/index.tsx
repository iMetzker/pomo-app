import { useRef, useState } from "react";
import { SoundsContainer } from "./styles";
import {
  MoonStars,
  Fire,
  CloudRain,
  Tree,
  MusicNoteSimple,
  Boat,
} from "phosphor-react";
import FireSound from "../../assets/sounds/sound-fire.mp3";
import NatureSound from "../../assets/sounds/sound-nature.mp3";
import RainSound from "../../assets/sounds/sound-rain.mp3";
import OceanSound from "../../assets/sounds/sound-ocean.mp3";
import AmbientSound from "../../assets/sounds/sound-ambient.mp3";
import NightSound from "../../assets/sounds/sound-night.mp3";
import { useTranslation } from "react-i18next";

interface MusicSound {
  handleButtonClick: (musicSrc: string) => void;
  playMusic: (musicSrc: string) => void;
}

export function Sounds() {
  const [currentMusic, setCurrentMusic] = useState<string | null>(null);
  const audioRef = useRef(new Audio());
  const { t } = useTranslation();

  const playMusic: MusicSound["playMusic"] = (musicSrc) => {
    audioRef.current = new Audio(musicSrc);
    audioRef.current.loop = true;
    audioRef.current.play();
    setCurrentMusic(musicSrc);
  };

  const handleButtonClick: MusicSound["handleButtonClick"] = (musicSrc) => {
    if (currentMusic === musicSrc) {
      audioRef.current.pause();
      setCurrentMusic(null);
    } else {
      if (currentMusic) {
        audioRef.current.pause();
      }
      playMusic(musicSrc);
    }
  };

  return (
    <SoundsContainer>
      <button
        onClick={() => handleButtonClick(AmbientSound)}
        className={currentMusic === AmbientSound ? "active" : ""} title={t("title-music-env")}
      >
        <MusicNoteSimple size={24} />
      </button>
      <button
        onClick={() => handleButtonClick(NightSound)}
        className={currentMusic === NightSound ? "active" : ""}
        title={t("title-music-night")}
      >
        <MoonStars size={24} />
      </button>
      <button
        onClick={() => handleButtonClick(OceanSound)}
        className={currentMusic === OceanSound ? "active" : ""}
        title={t("title-music-ocean")}
      >
        <Boat size={24} />
      </button>
      <button
        onClick={() => handleButtonClick(FireSound)}
        className={currentMusic === FireSound ? "active" : ""}
        title={t("title-music-fire")}
      >
        <Fire size={24} />
      </button>
      <button
        onClick={() => handleButtonClick(RainSound)}
        className={currentMusic === RainSound ? "active" : ""}
        title={t("title-music-rain")}
      >
        <CloudRain size={24} />
      </button>
      <button
        onClick={() => handleButtonClick(NatureSound)}
        className={currentMusic === NatureSound ? "active" : ""}
        title={t("title-music-nat")}
      >
        <Tree size={24} />
      </button>
    </SoundsContainer>
  );
}
