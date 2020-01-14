import {
    StyleSheet,
    Platform
} from "react-native"
import {
    widthPercentageToDP,
    heightPercentageToDP
} from "../../../../utils/Responsive"
import Colors from "../../../../constants/color"

export default StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 999,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: widthPercentageToDP(4.5)
    },
    popUpBackColor: {
        width: "100%",
        borderRadius: widthPercentageToDP(4),
        backgroundColor: Colors("shadow", "cream")
    },
    popUpContainer: {
        width: "100%",
        borderRadius: widthPercentageToDP(4),
        backgroundColor: Colors("base", "cream"),
        overflow: "hidden",
        marginBottom: widthPercentageToDP(1.2)
    },
    popUpTitleLatin: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        textAlign: "center",
        color: Colors("base", "darkOrange"),
        marginVertical: widthPercentageToDP(2.25),
        fontSize: widthPercentageToDP(6.5)
    },
    popUpTitleJawi: {
        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
        textAlign: "center",
        color: Colors("base", "darkOrange"),
        marginVertical: widthPercentageToDP(2.25),
        fontSize: widthPercentageToDP(6)
    },
    popUpCloseBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        paddingTop: widthPercentageToDP(2),
        paddingRight: widthPercentageToDP(4.5),
        width: widthPercentageToDP(13.5),
        height: widthPercentageToDP(11)
    },
    popUpSubTitleLatin: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        fontSize: widthPercentageToDP(5),
        marginTop: widthPercentageToDP(2.25),
        textAlign: "center",
        color: "#000"
    },
    popUpSubTitleJawi: {
        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
        fontSize: widthPercentageToDP(4.5),
        marginTop: widthPercentageToDP(2.25),
        textAlign: "center",
        color: "#000"
    },
    popUpBtn: {
        marginHorizontal: widthPercentageToDP(6),
        marginVertical: widthPercentageToDP(2.25)
    },
    popUpBtnJawi: {
        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold"
    },
    popUpGroup: {
        marginHorizontal: widthPercentageToDP(6),
        flexDirection: "row"
    },
    popUpGroupBtn: {
        marginVertical: widthPercentageToDP(2.25)
    },

    profileContainer: {
        flexDirection: "row",
        paddingHorizontal: widthPercentageToDP(6),
        marginBottom: widthPercentageToDP(1)
    },
    profileImgContainer: {
        padding: 3.5,
        borderColor: Colors("shadow", "cream"),
        borderWidth: 0.25,
        borderBottomWidth: 3,
        borderRadius: widthPercentageToDP(15),
        marginRight: widthPercentageToDP(3),
        overflow: "hidden"
    },
    profileImg: {
        borderRadius: widthPercentageToDP(10),
        height: widthPercentageToDP(20),
        width: widthPercentageToDP(20),
        overflow: "hidden"
    },
    profileTextContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    profileName: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        fontSize: widthPercentageToDP(7),
        color: "#000"
    },
    profileID: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        fontSize: widthPercentageToDP(3.5),
        color: "#000"
    },
    profileBtnContainer: {
        backgroundColor: Colors("base", "blue"),
        borderRadius: widthPercentageToDP(3.25)
    },
    profileBtn: {
        width: widthPercentageToDP(6.5),
        height: widthPercentageToDP(6.5)
    },

    img: {
        width: null,
        height: null,
        resizeMode: "contain",
        flex: 1
    },
    separator: {
        height: 1.5,
        backgroundColor: Colors("shadow", "cream")
    },
    inputGroup: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: widthPercentageToDP(2)
    },
    inputTextLatin: {
        fontSize: widthPercentageToDP(5.5),
        fontFamily:
        Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        color: "#000"
    },
    inputTextJawi: {
        fontSize: widthPercentageToDP(5),
        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
        color: "#000",
        lineHeight: Platform.OS === "android" ? 20 : 0
    },
    inputStatus: {
        right: -widthPercentageToDP(10),
        top: widthPercentageToDP(0.5),
        position: "absolute",
        height: widthPercentageToDP(5),
        width: widthPercentageToDP(5)
    },
    inputBar: {
        width: "90%",
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: Colors("shadow", "cream"),
        borderRadius: widthPercentageToDP(4.5),
        paddingHorizontal: widthPercentageToDP(4),
        paddingVertical: Platform.OS === "android" ? 0 : widthPercentageToDP(2),
        marginVertical: widthPercentageToDP(0.5)
        
    },
    inputBarWithPass: {
        paddingRight: widthPercentageToDP(11)
    },
    input: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        fontSize: widthPercentageToDP(5),
        height: Platform.OS === "android" ? widthPercentageToDP(10) : null,
        width: "100%"
    },
    inputErrorLatin: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
        fontSize: widthPercentageToDP(4),
        textAlign: "center",
        color: Colors("base", "red")
    },
    inputErrorJawi: {
        fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "GeezaPro-Bold",
        fontSize: widthPercentageToDP(3.5),
        textAlign: "center",
        color: Colors("base", "red"),
        lineHeight: Platform.OS === "android" ? 20 : 0
    },
    submitBtnWrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: widthPercentageToDP(8),
        marginBottom: widthPercentageToDP(8)
    },
    inputVisibleToggleImg: {
        width: null,
        height: null,
        resizeMode: "contain"
    },
})

