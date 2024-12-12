import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import MapView, { Callout, Marker } from "react-native-maps";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { router } from "expo-router";

export type MarketProps = PlaceProps & {
    latitude: number
    longitude: number
}

const currentLocation = {
 latitude: -23.561187293883442,
 longitude: -46.656451388116494
}

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
            <MapView 
                style={{flex: 1}}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            > 
                <Marker
                    identifier="current"
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude
                    }}
                    image={require("@/assets/location.png")}
                />

                {markets.map((market) => (
                    <Marker
                        key={market.id}
                        identifier={market.id}
                        coordinate={{
                            latitude: market.latitude,
                            longitude: market.longitude
                        }}
                        image={require("@/assets/pin.png")}
                    >
                        <Callout onPress={() => router.navigate(`/market/${market.id}`)}>
                            <View>
                                <Text 
                                    style={{
                                        fontSize: 14, color: colors.gray[600], fontFamily: fontFamily.medium
                                    }}
                                >
                                    {market.name}
                                </Text>
                                <Text 
                                    style={{
                                        fontSize: 12, color: colors.gray[600], fontFamily: fontFamily.regular
                                    }}
                                >
                                    {market.address}
                                </Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <Places data={markets} />
        </View>
    )
}