
import React from 'react'
import { Image } from 'react-native'

const cart = require('./png/cart.png')
const close = require('./png/close.png')
const logo = require('./png/logo.png')
const menu = require('./png/menu.png')
const search = require('./png/search.png')
const user = require('./png/user.png')

const Icon = (props: any) => {

    const getCode = () => {

        switch (props.code) {
            case 'cart': return cart
            case 'close': return close
            case 'logo': return logo
            case 'menu': return menu
            case 'search': return search
            case 'user': return user
            default: close
        }
    }

    return (
        <Image
            style={{
                height: props.height || 32,
                width: props.width || 32
            }}
            source={getCode()}
        />
    )
}

export default Icon
