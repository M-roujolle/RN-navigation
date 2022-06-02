import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextComponent = () => (
    <Text style={styles.blocText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum enim vitae nisi bibendum, vitae suscipit ex tincidunt. Mauris rhoncus justo eu interdum consequat. Sed consectetur felis sed fermentum dictum. Vivamus euismod ante ac sapien iaculis, id luctus lectus vulputate. Vestibulum nunc dolor, lacinia ut rhoncus eu, bibendum eget dolor. Donec quis quam finibus, fringilla ligula vel, lacinia justo. Aliquam molestie ultrices urna, eu iaculis massa imperdiet sed.
    </Text>
)

export default TextComponent

const styles = StyleSheet.create({
    blocText:{
        padding:10
    }
})