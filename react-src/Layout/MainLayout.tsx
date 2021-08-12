
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainBar from '../Components/MainBar/MainBar'

const MainLayout = (props: any) => {

    return(
        <SafeAreaView>
            <MainBar />
            <View>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

export default MainLayout
