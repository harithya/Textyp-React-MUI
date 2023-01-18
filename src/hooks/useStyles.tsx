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
    },
    // num of line of text with params
    numline: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical"
    }

})

export default useStyles