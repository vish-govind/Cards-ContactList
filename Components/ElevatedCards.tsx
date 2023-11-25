import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
      <Text style={styles.headings}>Elevated Cards</Text>
    <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevated]}>
        <Text style={styles.appearance}>Scroll</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
        <Text style={styles.appearance}>to</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
        <Text style={styles.appearance}>the</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
        <Text style={styles.appearance}>left</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
        <Text>😊😊</Text>
        </View>
    </ScrollView>
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
        padding : 8
       },
       card:{
           flex: 1,
           justifyContent:'center',
           alignItems:'center',
           height : 100,
           width : 100,
           borderRadius : 4 ,
           margin :10 ,
   
       },
       elevated :{
            backgroundColor : '#EA425C',
       },
        appearance: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})