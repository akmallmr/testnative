import {
    StyleSheet,
    Platform
} from "react-native"
import Metrics from "../../utils/Metrics"
import {
    widthPercentageToDP,
    heightPercentageToDP
} from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: widthPercentageToDP(4.5)
    },
    popUpContainer: {
        paddingHorizontal: widthPercentageToDP(4.5),
        borderRadius: null,
        borderBottomWidth: null,
        marginBottom: null,
        borderTopRightRadius: widthPercentageToDP(4),
        borderTopLeftRadius: widthPercentageToDP(4),
        paddingTop: widthPercentageToDP(4)
    },
    textContainer: {
        backgroundColor: Colors("shadow", "cream"),
        padding: widthPercentageToDP(3),
        alignItems: "center",
        borderRadius: widthPercentageToDP(4)
    },
    congratulationTextLatin: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        textAlign: "center",
        fontSize: widthPercentageToDP(6.5),
        marginBottom: widthPercentageToDP(5)
    },
    congratulationTextJawi: {
        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
        textAlign: "center",
        fontSize: widthPercentageToDP(5.5),
        marginBottom: widthPercentageToDP(10)
    },
    scoreTextLatin: {
        marginHorizontal: widthPercentageToDP(2),
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        fontSize: widthPercentageToDP(6.2),
        textAlign: "center"
    },
    scoreTextJawi: {
        marginHorizontal: widthPercentageToDP(2),
        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
        fontSize: widthPercentageToDP(5.7),
        textAlign: "center"
    },
    starContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: widthPercentageToDP(1.5),
        backgroundColor: Colors("base", "cream"),
        borderTopRightRadius: widthPercentageToDP(4),
        borderTopLeftRadius: widthPercentageToDP(4)
    },
    star: {
        width: widthPercentageToDP(17),
        height: widthPercentageToDP(17)
    },
    starMiddle: {
        marginTop: -widthPercentageToDP(10),
        width: widthPercentageToDP(22),
        height: widthPercentageToDP(22)
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: widthPercentageToDP(5),
        backgroundColor: Colors("base", "cream"),
        borderBottomRightRadius: widthPercentageToDP(4),
        borderBottomLeftRadius: widthPercentageToDP(4),
        borderBottomWidth: 3,
        borderBottomColor: Colors("shadow", "cream")
    },
    button: {
        marginBottom: -widthPercentageToDP(5),
        flex: 0.95
    },

    img: {
        resizeMode: "contain",
        flex: 1,
        height: null,
        width: null
    }
})
