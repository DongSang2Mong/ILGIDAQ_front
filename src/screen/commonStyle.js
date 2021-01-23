import { StyleSheet } from 'react-native';

const commonStyle = StyleSheet.create({
    centerAlign: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    endAlign: {
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        flexDirection: "row"
    },
    flexImage: {
        flex: 1, 
        resizeMode: "contain"
    }
});

const textStyle = StyleSheet.create({
    smallLight : {
        fontSize: 12,
        fontFamily: "NanumSquareL"
    },
    smallRegular: {
        fontSize: 12,
        fontFamily: "NanumSquareR"
    },
    smallBold: {
        fontSize: 12,
        fontFamily: "NanumSquareB"
    },
});
export { commonStyle, textStyle };