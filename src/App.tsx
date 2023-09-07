import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaul";
import { GlobalStyle } from "./styles/themes/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Teste</h1>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
