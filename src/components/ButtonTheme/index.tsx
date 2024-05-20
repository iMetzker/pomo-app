
import IconHeaderDark from "../../assets/icons/dark-theme.svg";
import IconHeaderLight from "../../assets/icons/light-theme.svg";
import { useState } from "react";
import { ButtonContainer } from "./styles";


export function ButtonTheme() {
    const [layoutTheme, setLayoutTheme] = useState("dark");

    const toggleTheme = () => {
    setLayoutTheme(layoutTheme === 'dark' ? "light" : "dark")
}
    return (
        
      <ButtonContainer onClick={toggleTheme}>
      <img src={layoutTheme === 'dark' ? IconHeaderDark : IconHeaderLight} alt="" />
    </ButtonContainer>
    )
}