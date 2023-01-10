import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2F2EE9"
        },
        secondary: {
            main: "rgba(125, 141, 167, 0.08)"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#FAFAFA"
                }
            }
        }
    }
});

export default theme