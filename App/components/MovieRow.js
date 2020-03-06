import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default function MovieRow({ movie }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={{ uri: movie.Poster }} style={styles.poster} />
                <Text style={styles.title}>{movie.Title}</Text>
                <View style={styles.iconContainer}>
                    <Icon name="heart-o" size={25} color='red' />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        alignItems: "center",
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    poster: {
        height: 100,
        width: 70,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        fontWeight: '300',
        flex: 2,
        marginLeft: 10,
    }
})