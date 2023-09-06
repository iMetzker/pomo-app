import 'styled-components';
import { defaultTheme } from '../styles/themes/defaul';

type ThemeType = typeof defaultTheme;

// criando uma tipagem
declare module 'styled-components' {
export interface DefaultTheme extends ThemeType {}
}