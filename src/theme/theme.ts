export interface ITheme {
  gray: string
  lightGray: string
  primary: string
  primaryContrast: string
  secondary: string
  secondaryContrast: string
  primaryFont: string
  obscureGray: string
  blue: string,
}

const theme: ITheme = {
  gray: '#ededed',
  lightGray: '#F3F3F4',
  obscureGray: '#a7a7a7',
  primary: '#3f69ff',
  primaryContrast: '#ffffff',
  secondary: '#101517',
  secondaryContrast: '#706c61',
  blue: '#039be5',
  primaryFont: 'Montserrat, system-ui, sans-serif',
}

export default theme