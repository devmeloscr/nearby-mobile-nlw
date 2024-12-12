import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    text: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray[500],
        lineHeight: 22.4,
        flex: 1
    },
})