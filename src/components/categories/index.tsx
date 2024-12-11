import { View, FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export type CategoriesProps = {
    id: string
    name: string
}[]

type Props = {
    data: CategoriesProps
    selected: string
    setSelected: (id: string) => void
}

export function Categories({ data, selected, setSelected }: Props){
    return <FlatList 
        data={data} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => <Category iconId={item.id} name={item.name} onPress={() => setSelected(item.id)} isSelected={item.id === selected} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        style={styles.container}
    />
}