import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
            <View>
            <View style={styles.label}>
                <Text>Enter Title:</Text>
            </View>
            
            <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>
            <View style={styles.label}>
                <Text>Enter Content:</Text>
            </View>
            <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>
            <View style={styles.buttonView}>
            <Button title="Update Blog"
                onPress={()=> {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
            />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        height : 35,
        justifyContent : 'space-between',
        margin: 10,
        padding : 5
    },
    label : {
        flexDirection : 'row',
        justifyContent : 'center',
        margin: 10
    },
    buttonView : {
        flexDirection : 'row',
        justifyContent : 'center'
    }
});

export default EditScreen;