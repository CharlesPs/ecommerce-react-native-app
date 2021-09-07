
import React, { useCallback, useEffect, useState } from "react"
import { Button, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../Layout/MainLayout"
import { actionLoadProducts } from "../../Redux/Actions/ShopActions"

import styles from "./HomeScreen.styles"

const HomeScreen = () => {

    const dispatch = useDispatch()

    const products = useSelector((state: any) => state.Products.result)

    const [ refreshing, setRefreshing ] = useState(false)

    const loadProducts = async () => {

        await dispatch(actionLoadProducts())

        setRefreshing(false)
    }

    const onRefresh = useCallback(() => {

        setRefreshing(true)

        loadProducts()
    }, [])

    useEffect(() => {

        if (!products.length) {

            loadProducts()
        }
    }, [ products ])

    return (
        <MainLayout>
            <ScrollView contentContainerStyle={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => onRefresh()}
                />
            }>
                <View style={{
                    padding: 16,
                }}>
                    <Text>
                        HomeScreen
                    </Text>
                    {!products.length ? null : (
                        <>
                            {products.map((product: any, i: number) => (
                                <View key={i}>
                                    <Text>
                                        {product.name}
                                    </Text>
                                </View>
                            ))}
                        </>
                    )}
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default HomeScreen

