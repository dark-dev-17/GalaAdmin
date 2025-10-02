import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import MyTheme from './theme/Dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <MyTheme />
    </StyledEngineProvider>
  </StrictMode>,
)
