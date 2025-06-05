import { AppRouter } from "./routes"
import { GlobalStyle } from "./styles/globalStyles"
import { ThemeStyleProvider } from "./styles/theme"

export const App = () => {
  return (
    <ThemeStyleProvider>
      <AppRouter />
      <GlobalStyle />
    </ThemeStyleProvider>
  )
}
