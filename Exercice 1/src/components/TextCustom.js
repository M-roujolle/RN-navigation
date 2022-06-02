import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextCustom = () => {
  return (
    <Text style={styles.blocText}>
      L'espace désigne les zones de l'Univers situées au-delà des atmosphères et
      des corps célestes. Il s'agit de l'étendue de densité quasi nulle qui
      sépare les astres. On parle aussi de vide spatial1. Selon les endroits de
      l'espace désignés, on le qualifie quelquefois d'espace cislunaire,
      interplanétaire, interstellaire (ou intersidéral) et intergalactique pour
      désigner plus précisément le vide spatial qui est délimité respectivement
      par le système Terre-Lune, les planètes, les étoiles et les galaxies.
      L'espace peut aussi se définir en opposition à l'atmosphère terrestre.
    </Text>
  )
}

export default TextCustom

const styles = StyleSheet.create({
  blocText: {
    padding: 10,
  },
})
