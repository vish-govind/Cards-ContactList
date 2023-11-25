import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headings}>Blog Card</Text>
      {/* Base Card */}
      <View style={styles.card}>
        {/* Header View */}
        <View style={styles.headingContainer}>
        <Text style={styles.headingText}>What's new in Javascript 21 - ES12</Text>
        </View>
        {/* Image View */}
         <Image source={{uri:'https://images.ctfassets.net/mrop88jh71hl/1wE8YZcecAfcFoJ7rlpqOn/0a409a5de0091eaa591fbec64f716eb1/javascript-for-kids.jpeg'}}
         style={styles.cardImage}
         />
         {/* Text beneath the image */}
         <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>Kids learning JavaScript embark on a playful journey into web development, grasping coding basics and creating interactive web content. Through engaging projects, they cultivate problem-solving skills, setting a foundation for future tech exploration</Text>
         </View>
         {/* Footer Container that has buttons to navigate to other links  */}
         <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/JavaScript')}>
                <Text style={styles.buttons}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('http://junilearning.com/blog/guide/javascript-for-kids/')}>
                <Text style={styles.buttons}>Register Here</Text>
            </TouchableOpacity>
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
        height : 500,
        width : 400,
        borderRadius: 3,
        marginHorizontal : 12 ,
        marginVertical : 15,
        backgroundColor : "#99AAAB",
        elevation : 7 ,
        shadowOffset : {
         height : 2,
         width : 2
        },
        shadowColor: "#EAF0F1",
        shadowOpacity: 0.4
     },
     headingContainer:{
          height: 38,
          justifyContent:'center',
          alignItems:'flex-start'
     },
     headingText:{
        fontSize: 17,
        fontWeight: '700',
        paddingHorizontal : 5,
        color:'#000000'
     },
     cardImage:{
        height : 300,
        //Gives some space between the image and the text 
        marginBottom : 15, 
        //Creates a curvish look at the top corner of the image
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5
     },
     bodyContainer:{
         padding : 6
     },
     bodyText:{
        color : "#333945",
        fontSize : 15,
        marginBottom : 6,
        marginTop:3,
        flexShrink : 3,
        marginHorizontal: 2
        //fontStyle:'italic'
     },
     footerContainer:{
        padding : 8 ,
        marginTop: 3,
        flexDirection : 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
     },
     buttons:{
        fontSize: 15,
        fontWeight: 'bold',
        color:'#000000',
        backgroundColor :'#DAE0E2',
        paddingHorizontal : 13,
        paddingVertical: 6 ,
        elevation : 4 ,
        borderRadius: 5
     }
     
})