import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    flex: {
        display: "flex",
        width: "100%"
    },
    justifyBetween: {
        flex: 1,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: 'semibold'
    }
})

export default useStyles