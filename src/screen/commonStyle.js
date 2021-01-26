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
    },
    margeinSide : {
        marginLeft: 33,
        marginRight: 33,
    },
    image28 : {
        width: 28, 
        height: 28, 
        resizeMode: 'contain'
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
    b22: {
        fontSize: 22,
        fontFamily: "NanumSquareB"
    },
});

const colorStyle = {
    black : "#0E0E0E",
    gray : "#424242",
    orange: "#FF4218",
    white : "#FFFFFF",
    blue : "#1B49BE",
    skyblue : "#2496FF",
}

export { commonStyle, textStyle, colorStyle };