import Table1 from "./Components/Table1";
import Input from "./Components/Input1";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
    const theme = createTheme({
      palette:{
        mode:"dark"
      }
    })
  return (
    <>
    <ThemeProvider theme={theme}>
       {/* <Table1 /> */}
       <Input />
    </ThemeProvider>
   
    </>
  )
}

export default App
