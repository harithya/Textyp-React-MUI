import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from './routes/web';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './config/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App