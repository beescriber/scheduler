

import styles as muistyles from './muiStyles'; 
import styles as agGridStyles from './agGridStyles';
const drawerWidth = 240;

export const styles = theme => ({
    homeContainer: {
        marginTop: "50px",
        width: '100%'
    },

    loading: {
        marginTop: '100px',
        marginLeft: `calc(50% - 50px)`,
    },
    saveBtn: {
        marginTop: '8px !important'
    },
    newTabBtn : {
        marginTop: '4px !important'
    },
    downloadBtn: {
        float: 'right'
    },
    btnIcon: {
        height: '20px !important', 
        width: '20px !important', 
        float: 'left'
    },

    errorTab: {
        color: `${theme.color.textHighlightColor} !important`,
        backgroundColor: `${theme.color.errorTextColor} !important`
    },

    "@global": {
        ...muiStyles(theme),
        ...agGridStyles(theme),
    
        "@font-face": {
            fontFamily: "Futura PT Book",
            src: 'local("Futura PT Book"), url(pages/genesisUI/fonts/FuturaPTBook.otf) format("opentype")'   
        },
        
        html: {
            height: "100%",
            backgroundColor: theme.color.backgroundColor,
            transition: 'all 0.5s ease-in'
        },
        body: {
            margin: "0px",
            height: "100%",
            fontFamily: [
                "Futura PT Book",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto", 
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                "sans-serif"
            ],
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale"
        }
    }
});
