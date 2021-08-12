
import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../Icon/Icon';

import styles from './MainBar.styles';

const MainBar = (props: any) => {

    return (
        <View style={styles.bar}>
            <View style={styles.barButton}>
                <Icon code="menu" height={20} width={18} />
            </View>
            <View style={styles.barButton}>
                <Icon code="search" height={20} width={20} />
            </View>
            <View style={styles.barWhole}>
                <Icon code="logo" height={28} width={32} />
            </View>
            <View style={styles.barButton}>
                <Icon code="user" height={20} width={20} />
            </View>
            <View style={styles.barButton}>
                <Icon code="cart" height={18} width={20} />
            </View>
        </View>
    )
}

export default MainBar
