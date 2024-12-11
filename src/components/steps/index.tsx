import { View, Text } from "react-native";
import { styles } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
    const stepsArray = [
        {
            icon: IconMapPin,
            title: "Encontre estabelecimentos",
            description: "Veja locais perto de você que são parceiros Nearby",
        },
        {
            icon: IconQrcode,
            title: "Ative o cupom com QR Code",
            description: "Escaneie o código no estabelecimento para usar o benefício"
        },
        {
            icon: IconTicket,
            title: "Garanta vantagens perto de você",
            description: "Ative cupons onde estiver, em diferentes tipos de estabelecimento "
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veja como funciona:</Text>
            {
                stepsArray.map((step, index) => (
                    <Step key={index} icon={step.icon} title={step.title} description={step.description} />
                ))
            }
        </View>
    )
}