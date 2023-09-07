import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaul";
import { GlobalStyle } from "./styles/themes/global";
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter> 
      <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
