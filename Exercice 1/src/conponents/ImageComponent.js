import { Image, StyleSheet } from "react-native"
import React from 'react'

const ImageComponent = () => (

    <Image
        source={{uri:'https://wallpaperaccess.com/full/2217435.jpg'}}
        style={styles.image}
    />
)

export default ImageComponent

const styles = StyleSheet.create({
    image:{
        height:300
    }
})
