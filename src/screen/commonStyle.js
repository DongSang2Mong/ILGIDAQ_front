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
    image24 : {
        width: 24, 
        height: 24, 
        resizeMode: 'contain'
    },
    image16 : {
        width: 16, 
        height: 16, 
        resizeMode: 'contain'
    },
    image12 : {
        width: 12, 
        height: 12, 
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
    b12: {
        fontSize: 12,
        fontFamily: "NanumSquareB"
    },
    b14: {
        fontSize: 14,
        fontFamily: "NanumSquareB"
    },
    b16: {
        fontSize: 16,
        fontFamily: "NanumSquareB"
    },
    b18: {
        fontSize: 18,
        fontFamily: "NanumSquareB"
    },
    b20 :{
        fontSize: 20,
        fontFamily: "NanumSquareB"
    },
    b22: {
        fontSize: 22,
        fontFamily: "NanumSquareB"
    },
    b24: {
        fontSize: 24,
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
    r10 : {
        fontSize: 10,
        fontFamily: "NanumSquareR"
    },
    r12 : {
        fontSize: 12,
        fontFamily: "NanumSquareR"
    },
    r16 : {
        fontSize: 16,
        fontFamily: "NanumSquareR"
    },
    r18 : {
        fontSize: 18,
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
    gray44: "#444444",
    orange: "#FF4218",
    white : "#FFFFFF",
    blue : "#1B49BE",
    skyblue : "#2496FF",
}

export { commonStyle, textStyle, colorStyle };