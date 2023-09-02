import { View, Image, StyleSheet, Text, TouchableOpacity , ScrollView} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IndexPage = ({navigation}) => {

    const [blogData, setBlogData] = useState([])

    const getBlogs = async () => {
        let blogs = await AsyncStorage.getItem('blogs');
        blogs = JSON.parse(blogs) || [];
        setBlogData(blogs);
    }

    useEffect(() => {
        const subscriber = navigation.addListener('focus', () => {
            getBlogs();
        });
        return subscriber;
    }, [])

    return (
        <View>
            <Image
                source={require('../assets/header.jpg')}
                style={styles.images}
            />

            <Text style={styles.headerTitle}> My Blog</Text>

            <View style={styles.container}>
                {/* New Blog Entry Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BlogPage')}
                >
                    <FontAwesome5 name="sticky-note" size={24} color="white" />
                    <Text style={styles.buttonText}>A New Blog Entry</Text>
                </TouchableOpacity>
                <ScrollView>
                    {/* Blog List by mapping over the blogData array and displaying each blog in a <TouchableOpacity> component. */}
                    {blogData && blogData.map((blog) => {
                        return (
                            <TouchableOpacity
                                key={blog.id}
                                style={{ marginTop: 10, backgroundColor: "white", borderRadius: 10, padding: 10 }}
                                onPress={() => navigation.navigate('BlogPage', { blog: blog })}
                            >
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{blog.title}</Text>
                                <Text style={{}}>{blog.content}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    images: {
        width: '100%',
        height: 230,
        resizeMode: 'cover',
      },
      headerTitle: {
        width: '100%',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 4, height: 1 },
        textShadowRadius: 8,
        position: 'absolute',
        top: 170,
      },
    button: {
        backgroundColor: '#5e8fff',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    container: {
        height: '100%',
        padding: 20,
        backgroundColor: '#19294f',
    },  
});

export default IndexPage;
