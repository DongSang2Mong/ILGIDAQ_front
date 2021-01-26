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
    marginSide : {
        marginLeft: 33,
        marginRight: 33,
    },
    image28 : {
        width: 28, 
        height: 28, 
        resizeMode: 'contain'
    },
    image16 : {
        width: 16, 
        height: 16, 
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
    b26 : {
        fontSize: 26,
        fontFamily: "NanumSquareB"
    },
    b28 : {
        fontSize: 28,
        fontFamily: "NanumSquareB"
    },
    b60 : {
        fontSize: 60,
        fontFamily: "NanumSquareB"
    },
    r16 : {
        fontSize: 16,
        fontFamily: "NanumSquareR"
    },
    r20 : {
        fontSize: 20,
        fontFamily: "NanumSquareR"
    },
    r60 : {
        fontSize: 60,
        fontFamily: "NanumSquareR"
    }
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