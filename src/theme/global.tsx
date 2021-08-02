import { createGlobalStyle } from 'styled-components'
import { ITheme } from 'theme/theme'

const DefaultStyles = createGlobalStyle`
  :root {
    --primary: ${({ theme }: { theme: ITheme }) => theme.primary};
    --gray: ${({ theme }) => theme.gray};
    --primaryFont: ${({ theme }) => theme.primaryFont};
    --scroollGray: ${({ theme }) => theme.obscureGray};
  }
  html {
    /* width */
    &::-webkit-scrollbar {
      width: 6px!important;
      height: 6px!important;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--scroollGray);
    }
  }
  body, figure {
    margin: 0
  }
  body {
    font-family: var(--primaryFont);
    background: var(--primaryContrast);
    font-size: 16px;
  }
  #root {
    max-width: 1366px;
  }
  .center {
    display: flex;
    align-items: center;
  }
`

function GlobalStyles(props: any) {
  const { theme } = props
  return (
    <>
      <DefaultStyles {...theme} />
    </>
  )
}

export default GlobalStyles