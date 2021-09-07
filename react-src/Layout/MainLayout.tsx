
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainBar from '../Components/MainBar/MainBar'
import Colors from '../Config/colors'

const MainLayout = (props: any) => {

    return(
        <SafeAreaView style={{
            backgroundColor: Colors.Background,
            flex: 1,
        }}>
            <MainBar />
            {props.children}
        </SafeAreaView>
    )
}

export default MainLayout
