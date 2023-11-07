import Routing from './routing';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/commons/muiTheme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
