import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketProps = PlaceProps

export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [markets, setMarkets] = useState<MarketProps[]>([])

    async function fetchCategories(){
        try {
            const { data } = await api.get("/categories")

            setCategories(data)
            setSelectedCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Erro ao buscar categorias")
        }
    }

    async function fetchMarkets() {
        try {
            if (!selectedCategory) return
            const { data } = await api.get("/markets/category/" + selectedCategory)
            setMarkets(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Mercados", "Erro ao buscar mercados")
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [selectedCategory])

    return (
        <View style={{flex: 1, backgroundColor: "#CECECE"}}>
            <Categories selected={selectedCategory} setSelected={setSelectedCategory} data={categories} />
            <Places data={markets} />
        </View>
    )
}