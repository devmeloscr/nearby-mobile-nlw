import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/theme";
import { IconProps } from '@tabler/icons-react-native';
import React from "react";

interface StepProps {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
}

export function Step({ title, description, icon: Icon }: StepProps) {
    return (
        <View style={styles.container}>
            {Icon && <Icon size={32} color={colors.red.base} />}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}
