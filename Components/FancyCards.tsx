import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headings}>Trending Places</Text>
      {/* Creating a base white card to place the image and text */}
      <View style={styles.card}>  
      {/* Setting up the Image */}
        <Image source={{uri:'https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg'}} 
        style={styles.cardImage}
        />
      {/* Setting up the text below the Image inside card body */}
      <View style={styles.cardbody}>
      <Text style={styles.cardTitle}>Taj Mahal</Text>
      <Text style={styles.cardLabel}>Agra , Uttar Pradesh , India</Text>
      <Text style={styles.cardDesc}>The Taj Mahal, a sublime marble masterpiece in Agra, India, stands as an enduring symbol of love and architectural brilliance.</Text>
      <Text style={styles.cardFooter}>12 Km away</Text>
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
    card:{
       height : 450,
       width : 400,
       marginHorizontal : 12 ,
    // Creates a margin space below the heading and the card 
       marginVertical : 15,
       backgroundColor : "#99AAAB",
    // Elevates the card above the base   
       elevation : 7 ,
    // Creates a shadow effect around the card
       shadowOffset : {
        height : 2,
        width : 2
       }
    },
    cardImage:{
        height : 250,
        //Gives some space between the image and the text 
        marginBottom : 15, 
        //Creates a curvish look at the top corner of the image
        borderTopLeftRadius : 12,
        borderTopRightRadius : 12

    },
    cardbody:{
        flex : 1,
        flexGrow : 1 ,
        paddingHorizontal : 7
    },
    cardTitle:{
      color : "#000000",
      fontSize : 25,
      fontWeight : 'bold',
      marginBottom : 5,
    },
    cardLabel:{
        color : "#000000",
        fontSize : 20,
        marginBottom : 5,
        fontStyle:'italic'

    },
    cardDesc:{
        color : "#333945",
        fontSize : 15,
        marginBottom : 5,
        marginTop:5,
        flexShrink : 2
    },
    cardFooter:{
        color : "#000000",
        fontSize : 20,
        marginTop : 3 ,
        marginBottom : 5,
    },
    
})