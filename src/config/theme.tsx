import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2F2EE9",
        },
        secondary: {
            main: "rgba(125, 141, 167, 0.08)"
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    borderRadius: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingLeft: 20,
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    [`& fieldset`]: {
                        border: "0.5px solid #DBE4ED",
                        borderRadius: 10,
                    },
                    '& .MuiInputBase-input': {
                        fontSize: 14
                    },

                    backgroundColor: "#F6F9FD",
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#FAFAFA"
                }
            },

        }
    },

});

export default theme