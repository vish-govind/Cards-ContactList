import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
        uid: 1,
        name: 'Vishali ❤️',
        status: 'I love coding',
        imageUrl: 'https://i.pinimg.com/564x/8d/9d/30/8d9d30ad548b41c47d22fc7c6443650c.jpg',
        },
        {
        uid: 2,
        name: 'Swathi',
        status: 'Wanderlust 😊',
        imageUrl: 'https://i.pinimg.com/474x/5e/0f/29/5e0f298faf338a3eb4cf01605f960a7a.jpg',
        },
        {
        uid: 3,
        name: 'Pooja😘😘',
        status: 'Avid Reader',
        imageUrl: 'https://i.pinimg.com/564x/c3/0f/65/c30f6505fe66b0eb9facdeaea9e808d7.jpg',
        },
        {
        uid: 4,
        name: 'Shreya',
        status: 'No calls .. Only Whatsapp',
        imageUrl: 'https://i.pinimg.com/474x/5e/0f/29/5e0f298faf338a3eb4cf01605f960a7a.jpg',
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      {/* Container to put the whatsapp view */}
      <ScrollView style={styles.container} scrollEnabled={false}>
        {
            // Inside the container iterating the contacts
            contacts.map(({uid, name, status, imageUrl}) => (
                //View for a userCard that holds image , name & status
                <View key={uid} style={styles.userCard}>
                    <Image source={{uri:imageUrl}} style={styles.userImage} />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal : 10
    },
    container:{
        paddingHorizontal : 17,
        marginTop : 10,
        //backgroundColor :"#2C3335"
       
    },
    userCard:{
        flex : 1,
        flexDirection : 'row',
        alignItems:'center',
        marginBottom : 20,
        backgroundColor : "#8395A7",
        padding : 5,
        borderRadius: 9

    },
    userImage:{
          height: 50,
          width : 50,
          borderRadius : 50 / 2 ,
          marginRight : 20
    },
    userName:{
        fontSize: 20,
        fontWeight: '600',
        color:'#000000'
    },
    userStatus:{
        fontSize: 17,
    }
})