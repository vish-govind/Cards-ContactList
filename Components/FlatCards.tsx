import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headings}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.One]}>
        <Text style={styles.Text}>BLUE</Text>
        </View>
        <View style={[styles.card,styles.Two]}>
        <Text style={styles.Text}>GREEN</Text>
        </View>
        <View style={[styles.card,styles.Three]}>
        <Text style={styles.Text}>YELLOW</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headings: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal : 10
    },
    container: {
     flex: 1,
     flexDirection:'row',
    },
    card:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        height : 100,
        width : 100 ,
        borderRadius : 4 ,
        margin :10 ,

    },
    One: {
          backgroundColor: '#1287A5'
    },
    Two: {
        backgroundColor: '#019031'
    },
    Three: {
        backgroundColor: '#EEC213'
    },
    Text: {
      fontSize: 20,
      fontWeight: 'bold',
    }
})