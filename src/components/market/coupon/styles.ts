import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    title: {
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        marginBottom: 12,
        fontSize: 14,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: colors.green.soft,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    code: {
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
        color: colors.gray[600],
        textTransform: "uppercase",
    },
})